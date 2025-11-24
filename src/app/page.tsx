"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Heart,
  Share2,
  Play,
  FileText,
  Users,
  BookOpen,
  Volume2,
  Filter,
  Star
} from "lucide-react";
import Link from "next/link";
import { formatLocalDate } from "@/lib/date-utils";

export default function Home() {
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
      tanggal_publikasi: "2024-01-08"
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
      penceramah: "Ustadzah Dr. Khalid Basalamah, M.A",
      tipe_konten: "Artikel",
      kategori: "Merendahkan",
      jumlah_suka: 201,
      tanggal_publikasi: "2024-01-03"
  }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContents, setFilteredContents] = useState(allContents);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-amber-700 dark:text-amber-400">DakwahWeb</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Platform dakwah tentang dermawan dan akhlak mulia</p>
            </div>

            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Cari ceramah atau artikel..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Berbagi
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Dakwah tentang Dermawan & Tidak Merendahkan</h1>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Platform digital untuk menyebarkan ajaran Islam tentang keutamaan bersedekah dan keharusan menjaga akhlak mulia
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">1.200+</div>
                <div className="text-sm">Konten Islami</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">50.000+</div>
                <div className="text-sm">Pengikut</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Ulama</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-medium text-gray-700 dark:text-gray-300">Kategori:</span>
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Semua
            </Button>
            <Button
              variant={selectedCategory === "Dermawan" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Dermawan")}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <Heart className="h-4 w-4" />
              Dermawan
            </Button>
            <Button
              variant={selectedCategory === "Merendahkan" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Merendahkan")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <Users className="h-4 w-4" />
              Jangan Merendahkan
            </Button>
          </div>
        </section>

        {/* Latest Content */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Konten Terbaru</h2>
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              {filteredContents.length} konten ditemukan
            </Badge>
          </div>

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
                          <Play className="h-4 w-4 mr-2" />
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
        </section>

        {/* Popular Content */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Konten Terpopuler</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allContents
              .concat() // Create a copy to avoid mutation
              .sort((a, b) => b.jumlah_suka - a.jumlah_suka)
              .slice(0, 2)
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
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{content.jumlah_suka} suka</span>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Tim Kami</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Kami adalah tim yang berdedikasi dalam menyebarkan dakwah tentang pentingnya bersikap dermawan dan tidak merendahkan orang lain
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mx-auto mb-4">
                <img
                  src="/img/dio.jpg"
                  alt="Dio"
                  className="w-32 h-32 rounded-full object-cover border-4 border-amber-300 mx-auto"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="font-semibold text-lg">Dio</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Pengembang Frontend</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mx-auto mb-4">
                <img
                  src="/img/rafly.jpg"
                  alt="Rafly"
                  className="w-32 h-32 rounded-full object-cover border-4 border-amber-300 mx-auto"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="font-semibold text-lg">Rafly</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Pengembang Backend</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mx-auto mb-4">
                <img
                  src="/img/refal.jpg"
                  alt="Refal"
                  className="w-32 h-32 rounded-full object-cover border-4 border-amber-300 mx-auto"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="font-semibold text-lg">Refal</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Desainer UI/UX</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative mx-auto mb-4">
                <img
                  src="/img/afif.jpg"
                  alt="Afif"
                  className="w-32 h-32 rounded-full object-cover border-4 border-amber-300 mx-auto"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="font-semibold text-lg">Afif</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Project Leader</p>
            </div>
          </div>
        </section>

        {/* Subscription Packages */}
        <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-amber-200 dark:border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Paket Berlangganan</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dukung dakwah Islami dengan berlangganan paket premium kami. Akses konten eksklusif dan fitur tambahan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Paket 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-amber-200 dark:border-gray-700 p-6 flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Paket Basic</h3>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">Rp. 77.900<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/bulan</span></div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Akses semua konten publik</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Download 3 konten premium</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Notifikasi konten baru</span>
                </li>
                <li className="flex items-center opacity-50">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500 dark:text-gray-500">Konsultasi langsung</span>
                </li>
                <li className="flex items-center opacity-50">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500 dark:text-gray-500">E-book eksklusif</span>
                </li>
              </ul>

              <Link href="/payment?package=basic" className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-900/30 dark:hover:bg-amber-800/50 dark:text-amber-300 font-medium py-3 rounded-lg transition-all duration-300 block text-center transform hover:scale-[1.02]">
                Pilih Paket
              </Link>
            </div>

            {/* Paket 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-amber-500 p-6 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">Paling Populer</span>
              </div>

              <div className="text-center mb-6 mt-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Paket Premium</h3>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">Rp. 106.900<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/bulan</span></div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Akses semua konten publik</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Download 10 konten premium</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Notifikasi konten baru</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Konsultasi langsung (2x/bulan)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">E-book eksklusif</span>
                </li>
              </ul>

              <Link href="/payment?package=premium" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-all duration-300 block text-center transform hover:scale-[1.02]">
                Pilih Paket
              </Link>
            </div>

            {/* Paket 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-amber-200 dark:border-gray-700 p-6 flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Paket Ultimate</h3>
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">Rp. 159.900<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/bulan</span></div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Akses semua konten publik</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Download semua konten premium</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Notifikasi konten baru</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Konsultasi langsung (sepuasnya)</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Semua E-book eksklusif</span>
                </li>
              </ul>

              <Link href="/payment?package=ultimate" className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-900/30 dark:hover:bg-amber-800/50 dark:text-amber-300 font-medium py-3 rounded-lg transition-all duration-300 block text-center transform hover:scale-[1.02]">
                Pilih Paket
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">DakwahWeb</h3>
          <p className="text-gray-400 mb-4">
            Platform dakwah tentang pentingnya bersikap dermawan dan tidak merendahkan orang lain
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/pricing" className="text-gray-300 hover:text-white">Langganan</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">Tentang</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Kontak</Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white">Privasi</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
