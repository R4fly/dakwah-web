// src/app/privacy/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Kebijakan Privasi
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-amber dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Kebijakan privasi ini menjelaskan bagaimana DakwahWeb mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami. Mohon baca dengan seksama untuk memahami praktik kami.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Informasi yang Kami Kumpulkan</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Kami tidak mengumpulkan informasi pribadi Anda saat Anda mengakses dan menggunakan situs web kami. Anda dapat menjelajahi konten dakwah kami secara anonim tanpa perlu mendaftar atau memberikan informasi pribadi.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Penggunaan Informasi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Karena kami tidak mengumpulkan informasi pribadi, kami tidak menggunakan informasi tersebut untuk tujuan apa pun. Semua konten yang tersedia di situs ini bersifat publik dan dapat diakses oleh siapa saja.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Cookie dan Teknologi Serupa</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Kami tidak menggunakan cookie atau teknologi pelacakan lainnya untuk mengumpulkan informasi pribadi pengguna.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Tautan ke Situs Lain</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Situs web kami mungkin berisi tautan ke situs web pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi situs-situs tersebut. Mohon periksa kebijakan privasi mereka saat mengunjungi situs-situs tersebut.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Keamanan Informasi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Karena kami tidak mengumpulkan informasi pribadi, tidak ada informasi pribadi yang disimpan atau ditransmisikan melalui server kami. Semua konten yang tersedia di situs ini bersifat publik dan aman.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Perubahan pada Kebijakan Privasi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Setiap perubahan akan diposting di halaman ini. Kami menyarankan Anda untuk meninjau halaman ini secara berkala untuk mengetahui pembaruan terbaru.
            </p>

            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Kontak Kami</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau pengalaman Anda dengan situs web kami, silakan hubungi kami melalui halaman kontak kami.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Kebijakan privasi ini terakhir diperbarui pada 24 November 2025.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}