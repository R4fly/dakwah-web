Ringkasan Aplikasi Media Dakwah: Dermawan & Tidak Merendahkan

Aplikasi ini bertujuan untuk menyediakan platform digital sederhana yang fokus pada konten dakwah (ceramah dan artikel) mengenai dua topik utama: pentingnya bersikap dermawan (sedekah/infaq) dan larangan merendahkan orang lain. Tujuannya adalah memotivasi pengguna untuk beramal saleh dan memiliki akhlak mulia.

Fitur Utama (Core Features)

Dashboard Utama: Tampilan beranda yang menampilkan konten terbaru dan terpopuler.

Konten Ceramah & Artikel:

Kategori khusus: "Jangan Merendahkan" dan "Jangan Lupa Dermawan".

Setiap konten memiliki judul, deskripsi singkat, nama penceramah/penulis, dan embed video (jika ceramah) atau teks lengkap (jika artikel).

Fitur Pencarian & Filter: Memungkinkan pengguna mencari konten berdasarkan judul, penceramah, atau topik.

Interaksi Pengguna (Sederhana):

Tombol "Suka" (Like) untuk mengapresiasi konten.

Fitur Berbagi (Share) ke media sosial.

Profil Penceramah/Penulis: Halaman singkat yang menampilkan daftar konten dari penceramah atau penulis tertentu.

Alur Aplikasi (Simple User Flow)

Akses (Landing Page): Pengguna membuka website, disambut dengan tampilan utama (Dashboard) yang langsung menampilkan konten terbaru.

Eksplorasi:

Pengguna dapat menggulir ke bawah untuk melihat daftar konten.

Pengguna dapat menggunakan filter kategori (Dermawan / Jangan Merendahkan).

Pengguna memasukkan kata kunci di kolom pencarian.

Melihat Konten:

Pengguna mengklik salah satu judul konten.

Halaman detail konten terbuka, menampilkan video ceramah (embed) atau teks artikel.

Pengguna melihat, membaca, dan memberikan "Suka" (Like).

Keluar: Pengguna menutup aplikasi. (Tidak ada fitur login untuk menjaga kesederhanaan).

Skema Database (PostgreSQL)

Kita hanya akan menggunakan dua tabel utama untuk menjaga kesederhanaan: Konten dan Penceramah.

1. Tabel: Penceramah (Penyedia Konten)

Kolom

Tipe Data

Keterangan

id

SERIAL PRIMARY KEY

ID unik Penceramah/Penulis

nama

VARCHAR(100) NOT NULL

Nama lengkap Penceramah/Penulis

bio

TEXT

Deskripsi singkat atau biografi

2. Tabel: Konten (Ceramah/Artikel)

Kolom

Tipe Data

Keterangan

id

SERIAL PRIMARY KEY

ID unik Konten

judul

VARCHAR(255) NOT NULL

Judul Ceramah/Artikel

deskripsi_singkat

VARCHAR(500)

Ringkasan konten

penceramah_id

INTEGER REFERENCES Penceramah(id)

ID penceramah yang menyampaikan konten

tipe_konten

VARCHAR(10) NOT NULL

'Video' atau 'Artikel'

kategori

VARCHAR(50) NOT NULL

'Dermawan' atau 'Merendahkan'

link_video

VARCHAR(255)

URL embed video (jika tipe 'Video')

isi_artikel

TEXT

Teks lengkap artikel (jika tipe 'Artikel')

jumlah_suka

INTEGER DEFAULT 0

Counter jumlah 'Suka'

tanggal_publikasi

TIMESTAMP DEFAULT NOW()

Waktu konten dipublikasikan

Contoh Sederhana Skema SQL (PostgreSQL)

-- Skema Tabel Penceramah
CREATE TABLE Penceramah (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    bio TEXT
);

-- Skema Tabel Konten
CREATE TABLE Konten (
    id SERIAL PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    deskripsi_singkat VARCHAR(500),
    penceramah_id INTEGER REFERENCES Penceramah(id),
    tipe_konten VARCHAR(10) NOT NULL CHECK (tipe_konten IN ('Video', 'Artikel')),
    kategori VARCHAR(50) NOT NULL CHECK (kategori IN ('Dermawan', 'Merendahkan')),
    link_video VARCHAR(255),
    isi_artikel TEXT,
    jumlah_suka INTEGER DEFAULT 0,
    tanggal_publikasi TIMESTAMP DEFAULT NOW()
);