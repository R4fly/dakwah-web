-- Skema Tabel Penceramah (Penyedia Konten)
CREATE TABLE IF NOT EXISTS penceramah (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    bio TEXT
);

-- Skema Tabel Konten (Ceramah/Artikel)
CREATE TABLE IF NOT EXISTS konten (
    id SERIAL PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    deskripsi_singkat VARCHAR(500),
    penceramah_id INTEGER REFERENCES penceramah(id),
    tipe_konten VARCHAR(10) NOT NULL CHECK (tipe_konten IN ('Video', 'Artikel')),
    kategori VARCHAR(50) NOT NULL CHECK (kategori IN ('Dermawan', 'Merendahkan')),
    link_video VARCHAR(255),
    isi_artikel TEXT,
    jumlah_suka INTEGER DEFAULT 0,
    tanggal_publikasi TIMESTAMP DEFAULT NOW()
);

-- Indeks untuk kinerja yang lebih baik
CREATE INDEX IF NOT EXISTS idx_konten_kategori ON konten(kategori);
CREATE INDEX IF NOT EXISTS idx_konten_tipe_konten ON konten(tipe_konten);
CREATE INDEX IF NOT EXISTS idx_konten_penceramah_id ON konten(penceramah_id);
CREATE INDEX IF NOT EXISTS idx_konten_tanggal_publikasi ON konten(tanggal_publikasi);

-- Contoh data awal
INSERT INTO penceramah (nama, bio) VALUES
('Ustadz Abdul Shomad', 'Ulama dan penceramah terkenal dengan gaya yang lugas dan ilmiah'),
('Ustadzah Siti Fatimah', 'Penceramah perempuan yang fokus pada akhlak dan tarbiyah keluarga'),
('Ustadz Zulkifli Muhammad Ali, Lc. MA', 'Ahli hadis dan penceramah dengan pendekatan ilmiah'),
('Ustadz KH. Zainudin MZ', 'Tokoh ulama kharismatik yang dikenal dengan ceramahnya yang menyentuh hati'),
('Ustadzah Dr. Khalid Basalamah, M.A', 'Ulama perempuan lulusan Arab Saudi yang aktif memberikan kajian');

INSERT INTO konten (judul, deskripsi_singkat, penceramah_id, tipe_konten, kategori, link_video, isi_artikel, jumlah_suka) VALUES
('Keutamaan Bersedekah dalam Islam', 'Penjelasan mendalam tentang manfaat dan keutamaan bersedekah menurut Al-Quran dan Hadis', 1, 'Video', 'Dermawan', 'https://www.youtube.com/embed/VIDEO_ID_1', NULL, 245),
('Jangan Merendahkan Orang Lain', 'Kajian tentang akhlak mulia dan bahaya meremehkan orang lain dalam kehidupan sehari-hari', 2, 'Artikel', 'Merendahkan', NULL, 'Artikel ini membahas pentingnya menjaga lisan dan hati dari sifat merendahkan orang lain, yang merupakan bentuk pelanggaran terhadap hak sesama muslim.', 189),
('Perbedaan Infaq dan Sedekah', 'Pentingnya infaq sebagai bentuk ibadah dan pembersih harta', 3, 'Video', 'Dermawan', 'https://www.youtube.com/embed/VIDEO_ID_2', NULL, 312),
('Menjaga Lisan dari Hinaan', 'Bagaimana menjaga lisan dari ucapan yang merendahkan dan mencaci maki', 1, 'Video', 'Merendahkan', 'https://www.youtube.com/embed/VIDEO_ID_3', NULL, 278),
('Zakat Harta dan Kewajibannya', 'Penjelasan lengkap tentang zakat harta, kadar, dan waktu pembayarannya', 4, 'Video', 'Dermawan', 'https://www.youtube.com/embed/VIDEO_ID_4', NULL, 156),
('Menghindari Ghibah dan Fitnah', 'Kajian tentang bahaya ghibah (membicarakan orang lain) dan cara menjaga lisan', 5, 'Artikel', 'Merendahkan', NULL, 'Artikel ini membahas bahaya ghibah dan fitnah dalam kehidupan sehari-hari serta solusi untuk menghindarinya.', 201);