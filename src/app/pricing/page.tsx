"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Heart, Users, BookOpen, Star } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-600">DakwahWeb</Link>
            
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Paket Berlangganan DakwahWeb
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dukung dakwah Islami dengan berlangganan paket premium kami. Akses konten eksklusif, fitur tambahan, dan berkontribusi pada penyebaran ajaran Islam tentang dermawan dan akhlak mulia.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Paket 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-amber-200 dark:border-gray-700 p-8 flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Paket Basic</h2>
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-4">Rp. 77.900<span className="text-base font-normal text-gray-500 dark:text-gray-400">/bulan</span></div>
                <p className="text-gray-600 dark:text-gray-400">Paket ideal untuk pengguna biasa</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Akses semua konten publik</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Download maksimal 3 konten premium</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Notifikasi konten baru</span>
                </li>
                <li className="flex items-start opacity-50">
                  <XIcon className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500 dark:text-gray-500">Konsultasi langsung</span>
                </li>
                <li className="flex items-start opacity-50">
                  <XIcon className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500 dark:text-gray-500">E-book eksklusif</span>
                </li>
                <li className="flex items-start opacity-50">
                  <XIcon className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-500 dark:text-gray-500">Akses arsip penuh</span>
                </li>
              </ul>
              
              <Button className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-900/30 dark:hover:bg-amber-800/50 dark:text-amber-300 font-medium py-3 rounded-lg transition-colors">
                Pilih Paket
              </Button>
            </div>

            {/* Paket 2 - Featured */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-amber-500 p-8 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-500 text-white text-sm font-bold px-4 py-1 rounded-full">Paling Populer</span>
              </div>
              
              <div className="text-center mb-8 mt-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Paket Premium</h2>
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-4">Rp. 106.900<span className="text-base font-normal text-gray-500 dark:text-gray-400">/bulan</span></div>
                <p className="text-gray-600 dark:text-gray-400">Paket paling lengkap</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Akses semua konten publik</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Download maksimal 10 konten premium</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Notifikasi konten baru</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Konsultasi langsung (2x/bulan)</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">E-book eksklusif</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Akses arsip penuh</span>
                </li>
              </ul>
              
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-colors">
                Pilih Paket
              </Button>
            </div>

            {/* Paket 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-amber-200 dark:border-gray-700 p-8 flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Paket Ultimate</h2>
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-4">Rp. 159.900<span className="text-base font-normal text-gray-500 dark:text-gray-400">/bulan</span></div>
                <p className="text-gray-600 dark:text-gray-400">Paket lengkap untuk pengguna aktif</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Akses semua konten publik</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Download semua konten premium</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Notifikasi konten baru</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Konsultasi langsung (sepuasnya)</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Semua E-book eksklusif</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Akses arsip penuh</span>
                </li>
              </ul>
              
              <Button className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-900/30 dark:hover:bg-amber-800/50 dark:text-amber-300 font-medium py-3 rounded-lg transition-colors">
                Pilih Paket
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Keuntungan Berlangganan</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dengan berlangganan, Anda tidak hanya mendapatkan akses premium, tetapi juga mendukung dakwah Islami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-amber-100 dark:border-gray-700">
              <div className="bg-amber-100 dark:bg-amber-900/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Konten Islami</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Akses konten berkualitas tentang dermawan dan akhlak mulia
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-amber-100 dark:border-gray-700">
              <div className="bg-amber-100 dark:bg-amber-900/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">E-book Eksklusif</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Koleksi lengkap buku digital tentang akhlak dan dermawan
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-amber-100 dark:border-gray-700">
              <div className="bg-amber-100 dark:bg-amber-900/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Komunitas</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Bergabung dengan komunitas Muslim yang peduli akhlak
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-amber-100 dark:border-gray-700">
              <div className="bg-amber-100 dark:bg-amber-900/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Konsultasi</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Konsultasi langsung dengan ulama dan konselor spiritual
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Pertanyaan Umum</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-4 border border-amber-100 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Apa saja yang saya dapatkan dengan berlangganan?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dengan berlangganan, Anda mendapatkan akses ke konten premium, buku elektronik eksklusif, notifikasi konten baru, dan (untuk paket Premium dan Ultimate) konsultasi langsung dengan ulama dan konselor spiritual.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-4 border border-amber-100 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Bagaimana cara berlangganan?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pilih paket yang Anda inginkan, klik tombol {'"Pilih Paket"'}, dan ikuti langkah-langkah pembayaran yang aman. Anda akan segera mendapatkan akses setelah pembayaran diverifikasi.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-4 border border-amber-100 dark:border-gray-700">
              <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">Apakah saya bisa berhenti berlangganan kapan saja?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ya, Anda bisa membatalkan berlangganan kapan saja. Akses Anda akan aktif hingga akhir periode langganan Anda.
              </p>
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
            <Link href="/" className="text-gray-300 hover:text-white">Beranda</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">Tentang</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Kontak</Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white">Privasi</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper components for check and X icons
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
}