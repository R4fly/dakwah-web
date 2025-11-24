// src/app/content/[id]/page.tsx

import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Heart,
  Share2,
  Play,
  FileText,
  Users,
  Clock,
  Star
} from 'lucide-react';
import { formatLocalDate } from '@/lib/date-utils';

// Mock data - in a real app, this would come from the database
const mockContents = [
  {
    id: 1,
    judul: "Keutamaan Bersedekah dalam Islam",
    deskripsi_singkat: "Penjelasan mendalam tentang manfaat dan keutamaan bersedekah menurut Al-Quran dan Hadis",
    penceramah: "Ustadz Abdul Shomad",
    penceramah_bio: "Dikenal dengan panggilan UAS, merupakan pendakwah kondang asal Riau. Lulusan S1 Universitas Al-Azhar Mesir dan S2 Darul Hadits Maroko. Ceramahnya populer karena penjelasannya yang lugas, gamblang, dan mudah dipahami, seringkali disertai dengan dalil-dalil dari Al-Qur'an dan Hadits",
    tipe_konten: "Video",
    kategori: "Dermawan",
    link_video: "https://www.youtube.com/embed/UfK4FrCpUyc?si=onVLT3JYnDtFmW_l", // Placeholder
    isi_artikel: null,
    jumlah_suka: 245,
    tanggal_publikasi: "2024-01-15"
  },
  {
    id: 2,
    judul: "Jangan Merendahkan Orang Lain",
    deskripsi_singkat: "Kajian tentang akhlak mulia dan bahaya meremehkan orang lain dalam kehidupan sehari-hari",
    penceramah: "Ustadzah Siti Fatimah",
    penceramah_bio: "Pengasuh pesantren putri dan penulis beberapa buku tentang akhlak",
    tipe_konten: "Artikel",
    kategori: "Merendahkan",
    link_video: null,
    isi_artikel: "Merendahkan orang lain adalah perbuatan yang sangat dilarang dalam Islam. Allah SWT berfirman dalam Al-Quran bahwa manusia diciptakan dalam bentuk yang sebaik-baiknya. Setiap manusia memiliki martabat yang harus dijaga. Perbuatan merendahkan orang lain dapat berupa perkataan, perbuatan, atau bahkan sekadar memandang dengan tidak hormat. Dalam sebuah hadis, Rasulullah SAW bersabda bahwa seorang mukmin tidak boleh merendahkan, menyakiti, atau meremehkan saudaranya sesama muslim. Akhlak yang mulia adalah salah satu ciri seorang mukmin sejati. Kita sebagai umat Islam harus menjaga lisan dan tindakan kita agar tidak melukai perasaan orang lain. Sebagai gantinya, kita dianjurkan untuk saling menghormati dan menghargai satu sama lain.",
    jumlah_suka: 189,
    tanggal_publikasi: "2024-01-12"
  },
  {
    id: 3,
    judul: "Perbedaan Infaq dan Sedekah",
    deskripsi_singkat: "Perbedaan Infaq dan Sedekah",
    penceramah: "Ustadz Zulkifli Muhammad Ali, Lc. MA",
    penceramah_bio: "Seorang pendakwah dan penulis kitab fikih kontemporer yang produktif. Menyelesaikan S1 di Universitas Al-Azhar, Mesir, dan S2 di International Islamic University Malaysia (IIUM). Dikenal dengan gaya ceramahnya yang sistematis, jelas, dan mendalam, khususnya dalam membahas masalah fikih sehari-hari. Kajiannya sering menekankan pentingnya kehati-hatian dalam berucap dan berperilaku sesuai tuntunan syariat.",
    tipe_konten: "Video",
    kategori: "Dermawan",
    link_video: "https://www.youtube.com/embed/fh_dTRp1dfw?si=oO0rUCysumTxMnIq", // Placeholder
    isi_artikel: null,
    jumlah_suka: 312,
    tanggal_publikasi: "2024-01-10"
  },
  {
      id: 4,
      judul: "Menjaga Lisan dari Hinaan",
      deskripsi_singkat: "Bagaimana menjaga lisan dari ucapan yang merendahkan dan mencaci maki",
      penceramah: "Ustadz Abdul Shomad",
      penceramah_bio: "Dikenal dengan panggilan UAS, merupakan pendakwah kondang asal Riau. Lulusan S1 Universitas Al-Azhar Mesir dan S2 Darul Hadits Maroko. Ceramahnya populer karena penjelasannya yang lugas, gamblang, dan mudah dipahami, seringkali disertai dengan dalil-dalil dari Al-Qur'an dan Hadits",
      tipe_konten: "Video",
      kategori: "Merendahkan",
      link_video: "https://www.youtube.com/embed/gCP6xOBGAgM?si=OyZe5whbaV--dyjy", // Placeholder
      isi_artikel: null,
      jumlah_suka: 278,
      tanggal_publikasi: "2024-11-23"
    },
    {
      id: 5,
      judul: "Zakat Harta dan Kewajibannya",
      deskripsi_singkat: "Penjelasan lengkap tentang zakat harta, kadar, dan waktu pembayarannya",
      penceramah: "Ustadz KH. Zainudin MZ",
      penceramah_bio: "Dikenal sebagai dai legendaris Indonesia dengan sebutan 'Singa Podium'. Ceramahnya dinamis, berapi-api, dan mudah dicerna semua kalangan. Menguasai berbagai disiplin ilmu, mulai dari fikih, akidah, hingga tasawuf. Dakwahnya menekankan pentingnya akhlak mulia dan menjauhi segala bentuk kemaksiatan, termasuk ghibah dan fitnah",
      tipe_konten: "Video",
      kategori: "Dermawan",
      link_video: "https://www.youtube.com/embed/2VCRFSyltgA?si=nxxay3PODOkIH2P8",
      isi_artikel: null,
      jumlah_suka: 156,
      tanggal_publikasi: "2024-01-05"
    },
    {
      id: 6,
      judul: "Menghindari Ghibah dan Fitnah",
      deskripsi_singkat: "Kajian tentang bahaya ghibah (membicarakan orang lain) dan cara menjaga lisan",
      penceramah: "Ustadz Dr. Khalid Basalamah, M.A",
      penceramah_bio: "Pendakwah dan ahli ilmu Aqidah. Lulusan Universitas Islam Madinah. Fokus kajian pada pemurnian akidah, fikih, dan akhlak.",
      tipe_konten: "Artikel",
      kategori: "Merendahkan",
      link_video: "null",
      isi_artikel: "Merendahkan orang lain dengan membicarakan aibnya (ghibah) adalah perbuatan yang sangat dilarang dalam Islam. Allah SWT berfirman dalam Al-Quran bahwa menggunjing seperti memakan bangkai saudara sendiri. Setiap manusia memiliki martabat dan kehormatan yang harus dijaga. Perbuatan ghibah dapat merusak persaudaraan dan menghapus pahala kebaikan. Dalam sebuah hadis, Rasulullah SAW bersabda bahwa seorang mukmin tidak boleh menggunjing saudaranya sesama muslim. Menjaga lisan adalah salah satu ciri seorang mukmin sejati. Kita sebagai umat Islam harus selalu berpikir sebelum berkata dan mengisi lisan dengan dzikir agar terhindar dari dosa lisan. Sebagai gantinya, kita dianjurkan untuk saling menghormati dan membicarakan hal-hal yang bermanfaat.",
      jumlah_suka: 201,
      tanggal_publikasi: "2024-01-03"
    }
];

export default async function ContentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const contentId = parseInt(id);
  const content = mockContents.find(item => item.id === contentId);

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:underline">Beranda</Link></li>
            <li className="mx-2">/</li>
            <li><Link href="/content" className="hover:underline">Konten</Link></li>
            <li className="mx-2">/</li>
            <li className="text-gray-900 dark:text-white">{content.judul}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
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
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Heart className="h-4 w-4" />
                      <span>{content.jumlah_suka}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      <span>{formatLocalDate(content.tanggal_publikasi)}</span>
                    </div>
                  </div>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {content.judul}
                </h1>

                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">{content.penceramah}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Penceramah</div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {content.deskripsi_singkat}
                </p>

                {/* Content Type Display */}
                {content.tipe_konten === 'Video' && content.link_video ? (
                  <div className="mb-6">
                    <div className="aspect-w-16 aspect-h-9 relative w-full">
                      <iframe 
                        src={content.link_video} 
                        title={content.judul}
                        className="w-full h-64 md:h-96 rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ) : content.tipe_konten === 'Artikel' && content.isi_artikel ? (
                  <div className="prose prose-amber dark:prose-invert max-w-none bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                      {content.isi_artikel}
                    </div>
                  </div>
                ) : null}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Suka ({content.jumlah_suka})
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Bagikan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Penceramah Info */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Tentang Penceramah</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white">{content.penceramah}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Penceramah</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {content.penceramah_bio}
                </p>
                <Button variant="outline" className="w-full">
                  Lihat Semua Ceramah
                </Button>
              </CardContent>
            </Card>

            {/* Related Content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Konten Terkait</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContents
                    .filter(item => item.id !== content.id && item.kategori === content.kategori)
                    .slice(0, 3)
                    .map(item => (
                      <a 
                        key={item.id} 
                        href={`/content/${item.id}`}
                        className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <h3 className="font-medium text-gray-800 dark:text-white line-clamp-1">{item.judul}</h3>
                        <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{item.jumlah_suka} suka</span>
                        </div>
                      </a>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}