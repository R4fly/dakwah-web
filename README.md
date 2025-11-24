# DakwahWeb - Media Dakwah Dermawan & Tidak Merendahkan

Platform digital untuk menyebarkan ajaran Islam tentang keutamaan bersedekah dan keharusan menjaga akhlak mulia (tidak merendahkan orang lain).

## Deskripsi

DakwahWeb adalah aplikasi web yang menyediakan konten-konten islami dengan fokus pada dua tema utama:

1. **Kepedulian Sosial** - Menyebarkan ajaran tentang pentingnya bersedekah, infaq, dan berbagi kepada sesama
2. **Akhlak Mulia** - Mengingatkan akan pentingnya menjaga lisan dan tidak merendahkan orang lain

## Fitur Utama

- Dashboard utama dengan konten terbaru dan terpopuler
- Kumpulan ceramah video dan artikel
- Kategori spesifik: "Dermawan" dan "Jangan Merendahkan"
- Fitur pencarian dan filter
- Tampilan profil penceramah
- Sistem like untuk mengapresiasi konten
- Fitur berbagi ke media sosial

## Struktur Database

### Tabel: Penceramah
- `id`: SERIAL PRIMARY KEY
- `nama`: VARCHAR(100) NOT NULL
- `bio`: TEXT

### Tabel: Konten
- `id`: SERIAL PRIMARY KEY
- `judul`: VARCHAR(255) NOT NULL
- `deskripsi_singkat`: VARCHAR(500)
- `penceramah_id`: INTEGER REFERENCES Penceramah(id)
- `tipe_konten`: VARCHAR(10) NOT NULL ('Video' or 'Artikel')
- `kategori`: VARCHAR(50) NOT NULL ('Dermawan' or 'Merendahkan')
- `link_video`: VARCHAR(255) (jika tipe 'Video')
- `isi_artikel`: TEXT (jika tipe 'Artikel')
- `jumlah_suka`: INTEGER DEFAULT 0
- `tanggal_publikasi`: TIMESTAMP DEFAULT NOW()

## Alur Aplikasi

1. **Akses (Landing Page)**: Pengguna membuka website, disambut dengan tampilan utama (Dashboard) yang langsung menampilkan konten terbaru.

2. **Eksplorasi**:
   - Pengguna dapat menggulir ke bawah untuk melihat daftar konten
   - Pengguna dapat menggunakan filter kategori (Dermawan / Jangan Merendahkan)
   - Pengguna memasukkan kata kunci di kolom pencarian

3. **Melihat Konten**:
   - Pengguna mengklik salah satu judul konten
   - Halaman detail konten terbuka, menampilkan video ceramah (embed) atau teks artikel
   - Pengguna melihat, membaca, dan memberikan "Suka" (Like)

4. **Keluar**: Pengguna menutup aplikasi.

## Teknologi yang Digunakan

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Supabase (database)
- Lucide React (ikon)
- shadcn/ui (komponen UI)

## Instalasi

1. Clone repository ini
2. Jalankan `npm install`
3. Buat file `.env.local` dan tambahkan variabel lingkungan Supabase
4. Jalankan `npm run dev`

## Tujuan Aplikasi

Aplikasi ini bertujuan untuk:
- Menyebarkan nilai-nilai kebaikan dalam masyarakat
- Memotivasi umat Muslim untuk bersedekah dan berinfaq
- Mengingatkan akan pentingnya menjaga akhlak mulia
- Menjadi sarana pendidikan agama yang mudah diakses

## Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau buka issue untuk perbaikan.

## Lisensi

[MIT License]