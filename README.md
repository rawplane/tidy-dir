# tidy-dir

CLI organizer folder otomatis berbasis ekstensi file. Hanya menggunakan Rust stdlib tanpa dependensi eksternal.

## Fitur

- Kelompokkan file ke subfolder kategori.
- Mode `--dry-run` untuk melihat simulasi perpindahan sebelum eksekusi.
- Melewati file jika nama target sudah ada (mencegah overwrite).

## Kategori Ekstensi

| Kategori | Ekstensi |
|---|---|
| **Images** | `jpg`, `jpeg`, `png`, `gif`, `webp`, `svg` |
| **Documents** | `pdf`, `docx`, `doc`, `txt`, `md`, `xlsx`, `pptx` |
| **Archives** | `zip`, `tar`, `gz`, `rar`, `7z` |
| **Media** | `mp3`, `wav`, `flac`, `mp4`, `mkv`, `avi` |

*File tanpa ekstensi atau ekstensi tidak terdaftar akan dilewati.*

## Kompilasi

```bash
cargo build --release
```

Binary tersimpan di `target/release/tidy-dir`.

## Penggunaan

```bash
# Simulasi (dry-run) di direktori saat ini
cargo run -- --dry-run

# Simulasi di folder tertentu
cargo run -- /path/to/Downloads --dry-run

# Eksekusi pindah file
cargo run -- /path/to/Downloads

# Pakai binary langsung
./target/release/tidy-dir ~/Downloads
```

## Pengujian

```bash
cargo test
```
