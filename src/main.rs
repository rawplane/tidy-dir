use std::env;
use std::fs;
use std::path::PathBuf;

fn categorize(ext: &str) -> Option<&'static str> {
    match ext.to_ascii_lowercase().as_str() {
        "jpg" | "jpeg" | "png" | "gif" | "webp" | "svg" => Some("Images"),
        "pdf" | "docx" | "doc" | "txt" | "md" | "xlsx" | "pptx" => Some("Documents"),
        "zip" | "tar" | "gz" | "rar" | "7z" => Some("Archives"),
        "mp3" | "wav" | "flac" | "mp4" | "mkv" | "avi" => Some("Media"),
        _ => None,
    }
}

// ponytail: CLI parser manual. Batas: 1 path + --dry-run. Upgrade ke `clap` jika opsi makin rumit.
struct Config {
    target_dir: PathBuf,
    dry_run: bool,
}

fn parse_args<I: Iterator<Item = String>>(mut args: I) -> Config {
    let mut target_dir = PathBuf::from(".");
    let mut dry_run = false;

    while let Some(arg) = args.next() {
        if arg == "--dry-run" {
            dry_run = true;
        } else if !arg.starts_with('-') {
            target_dir = PathBuf::from(arg);
        }
    }

    Config { target_dir, dry_run }
}

fn organize(config: &Config) -> std::io::Result<usize> {
    let entries = fs::read_dir(&config.target_dir)?;
    let mut count = 0;

    for entry in entries.flatten() {
        let path = entry.path();
        if !path.is_file() {
            continue;
        }

        let ext = match path.extension().and_then(|s| s.to_str()) {
            Some(e) => e,
            None => continue,
        };

        let category = match categorize(ext) {
            Some(cat) => cat,
            None => continue,
        };

        let file_name = match path.file_name() {
            Some(name) => name,
            None => continue,
        };

        let dest_dir = config.target_dir.join(category);
        let dest_file = dest_dir.join(file_name);

        if config.dry_run {
            println!("[DRY-RUN] {} -> {}/{}", file_name.to_string_lossy(), category, file_name.to_string_lossy());
            count += 1;
        } else {
            if dest_file.exists() {
                eprintln!("Lewati (file sudah ada): {}", dest_file.display());
                continue;
            }
            fs::create_dir_all(&dest_dir)?;
            fs::rename(&path, &dest_file)?;
            println!("Pindah: {} -> {}/{}", file_name.to_string_lossy(), category, file_name.to_string_lossy());
            count += 1;
        }
    }

    Ok(count)
}

fn main() {
    let config = parse_args(env::args().skip(1));
    println!("Scan folder: {} (dry_run: {})", config.target_dir.display(), config.dry_run);

    match organize(&config) {
        Ok(total) => println!("Selesai. Total file: {}", total),
        Err(e) => eprintln!("Error: {}", e),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_categorize() {
        assert_eq!(categorize("PNG"), Some("Images"));
        assert_eq!(categorize("pdf"), Some("Documents"));
        assert_eq!(categorize("zip"), Some("Archives"));
        assert_eq!(categorize("mp4"), Some("Media"));
        assert_eq!(categorize("exe"), None);
    }

    #[test]
    fn test_parse_args() {
        let args = vec!["/tmp/test".to_string(), "--dry-run".to_string()];
        let cfg = parse_args(args.into_iter());
        assert_eq!(cfg.target_dir, PathBuf::from("/tmp/test"));
        assert!(cfg.dry_run);
    }
}
