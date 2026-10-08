# tidy-dir

An automatic folder organizer CLI based on file extensions. Built entirely with the Rust standard library, with no external dependencies.

## Features

* Organize files into category-based subfolders.
* `--dry-run` mode to preview file moves before execution.
* Skips files if the target filename already exists, preventing overwrites.

## Extension Categories

| Category      | Extensions                                        |
| ------------- | ------------------------------------------------- |
| **Images**    | `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg`        |
| **Documents** | `pdf`, `docx`, `doc`, `txt`, `md`, `xlsx`, `pptx` |
| **Archives**  | `zip`, `tar`, `gz`, `rar`, `7z`                   |
| **Media**     | `mp3`, `wav`, `flac`, `mp4`, `mkv`, `avi`         |

*Files without an extension or with unsupported extensions are skipped.*

## Compilation

```bash
cargo build --release
```

The binary will be located at:

```text
target/release/tidy-dir
```

## Usage

```bash
# Dry-run in the current directory
cargo run -- --dry-run

# Dry-run on a specific folder
cargo run -- /path/to/Downloads --dry-run

# Execute file moves
cargo run -- /path/to/Downloads

# Use the compiled binary directly
./target/release/tidy-dir ~/Downloads
```

## Testing

```bash
cargo test
```
