// src/app/content/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Search,
  Heart,
  Share2,
  Play,
  FileText,
  Users,
  BookOpen,
  Volume2,
  Filter
} from 'lucide-react';
import Link from 'next/link';
import { formatLocalDate } from '@/lib/date-utils';

// Mock data for content
const allContents = [
  {
    id: 1,
    judul: "Keutamaan Bersedekah dalam Islam",
    deskripsi_singkat: "Penjelasan mendalam tentang manfaat dan keutamaan bersedekah menurut Al-Quran dan Hadis",
    penceramah: "Ustadz Abdul Shomad",
    tipe_konten: "Video",
    kategori: "Dermawan",
    jumlah_suka: 245,
    tanggal_publikasi: "2024-01-15"
  },
  {
    id: 2,
    judul: "Jangan Merendahkan Orang Lain",
    deskripsi_singkat: "Kajian tentang akhlak mulia dan bahaya meremehkan orang lain dalam kehidupan sehari-hari",
    penceramah: "Ustadzah Siti Fatimah",
    tipe_konten: "Artikel",
    kategori: "Merendahkan",
    jumlah_suka: 189,
    tanggal_publikasi: "2024-01-12"
  },
  {
    id: 3,
    judul: "Perbedaan Infaq dan Sedekah",
    deskripsi_singkat: "Pentingnya infaq sebagai bentuk ibadah dan pembersih harta",
    penceramah: "Ustadz Zulkifli Muhammad Ali, Lc. MA",
    tipe_konten: "Video",
    kategori: "Dermawan",
    jumlah_suka: 312,
    tanggal_publikasi: "2024-01-10"
  },
  {
    id: 4,
    judul: "Menjaga Lisan dari Hinaan",
    deskripsi_singkat: "Bagaimana menjaga lisan dari ucapan yang merendahkan dan mencaci maki",
    penceramah: "Ustadz Abdul Shomad",
    tipe_konten: "Video",
    kategori: "Merendahkan",
    jumlah_suka: 278,
    tanggal_publikasi: "2024-11-23",
  },
  {
    id: 5,
      judul: "Zakat Harta dan Kewajibannya",
      deskripsi_singkat: "Penjelasan lengkap tentang zakat harta, kadar, dan waktu pembayarannya",
      penceramah: "Ustadz KH. Zainudin MZ",
      tipe_konten: "Video",
      kategori: "Dermawan",
      jumlah_suka: 156,
      tanggal_publikasi: "2024-01-05"
  },
  {
    id: 6,
      judul: "Menghindari Ghibah dan Fitnah",
      deskripsi_singkat: "Kajian tentang bahaya ghibah (membicarakan orang lain) dan cara menjaga lisan",
      penceramah: "Ustadz Dr. Khalid Basalamah, M.A",
      tipe_konten: "Artikel",
      kategori: "Merendahkan",
      jumlah_suka: 201,
      tanggal_publikasi: "2024-01-03"
  }
];

export default function ContentPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContents, setFilteredContents] = useState([...allContents]);

  useEffect(() => {
    let result = [...allContents]; // Create a new array to avoid mutation

    if (selectedCategory) {
      result = result.filter(content => content.kategori === selectedCategory);
    }

    if (searchQuery) {
      result = result.filter(content =>
        content.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.penceramah.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.deskripsi_singkat.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredContents(result);
  }, [selectedCategory, searchQuery]);

  const handleFilterChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Koleksi Konten Dakwah</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Kumpulan ceramah dan artikel tentang dermawan dan tidak merendahkan
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Cari ceramah atau artikel..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">Kategori:</span>
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => handleFilterChange(null)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Semua
            </Button>
            <Button
              variant={selectedCategory === "Dermawan" ? "default" : "outline"}
              onClick={() => handleFilterChange("Dermawan")}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <Heart className="h-4 w-4" />
              Dermawan
            </Button>
            <Button
              variant={selectedCategory === "Merendahkan" ? "default" : "outline"}
              onClick={() => handleFilterChange("Merendahkan")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <Users className="h-4 w-4" />
              Jangan Merendahkan
            </Button>
          </div>
        </div>

        {/* Content Count */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {selectedCategory ? `${selectedCategory} - ` : ''}Konten Terbaru
          </h2>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
            {filteredContents.length} konten ditemukan
          </Badge>
        </div>

        {/* Content Grid */}
        {filteredContents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContents.map((content) => (
              <Card key={content.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg line-clamp-2">{content.judul}</CardTitle>
                    <Badge
                      variant="secondary"
                      className={
                        content.kategori === "Dermawan"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      }
                    >
                      {content.kategori}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{content.penceramah}</span>
                    <span className="mx-2">•</span>
                    <span>{formatLocalDate(content.tanggal_publikasi)}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {content.deskripsi_singkat}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      {content.tipe_konten === "Video" ? (
                        <>
                          <Play className="h-4 w-4" />
                          <span>Video</span>
                        </>
                      ) : (
                        <>
                          <FileText className="h-4 w-4" />
                          <span>Artikel</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Heart className="h-4 w-4" />
                        <span className="ml-1">{content.jumlah_suka}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full mt-4" asChild>
                    <Link href={`/content/${content.id}`}>
                      {content.tipe_konten === "Video" ? (
                        <>
                          <Volume2 className="h-4 w-4 mr-2" />
                          Tonton Ceramah
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Baca Artikel
                        </>
                      )}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <div className="mx-auto bg-amber-100 dark:bg-amber-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Konten Tidak Ditemukan</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Kami tidak menemukan konten yang sesuai dengan pencarian Anda.
            </p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory(null);
            }}>
              Tampilkan Semua Konten
            </Button>
          </Card>
        )}

        {/* Popular Content Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Konten Terpopuler</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allContents
              .concat() // Create a copy to avoid mutation
              .sort((a, b) => Number(b.jumlah_suka) - Number(a.jumlah_suka))
              .slice(0, 3)
              .map((content) => (
                <Card key={`popular-${content.id}`} className="flex items-center gap-4 p-4">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-3 rounded-lg">
                    {content.tipe_konten === "Video" ? (
                      <Volume2 className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    ) : (
                      <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-1">{content.judul}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{content.penceramah}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center text-amber-600 dark:text-amber-400">
                        <Heart className="h-4 w-4 fill-current mr-1" />
                        <span className="text-sm">{content.jumlah_suka}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}