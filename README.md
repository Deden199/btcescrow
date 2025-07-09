# Nusantara Pool

Platform undian hasil lotre untuk berbagai kota di Indonesia.

## Setup

1. Salin `.env.example` menjadi `.env` dan sesuaikan jika perlu.
2. Jalankan `docker-compose up --build`.
3. Akses Frontend di `http://localhost:5173` dan Backend di `http://localhost:4000`.

## Menambah Kota Baru

Masuk ke halaman Admin, login dengan kredensial pada `.env` (`ADMIN_USERNAME`/`ADMIN_PASSWORD`), kemudian tambahkan nama kota pada form.

## Environment Variables

Lihat file `.env.example` untuk daftar variabel lingkungan yang digunakan backend dan frontend.
