// src/app/about/page.tsx

import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Volume2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Tentang DakwahWeb
          </h1>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="prose prose-amber dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  DakwahWeb adalah platform digital yang menyediakan konten-konten islami 
                  dengan fokus utama pada dua tema penting: <strong>keutamaan bersikap dermawan</strong> 
                  dan <strong>larangan merendahkan orang lain</strong>.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kami percaya bahwa dakwah tidak hanya disampaikan melalui ceramah-ceramah besar, 
                  tetapi juga melalui tindakan nyata sehari-hari. Dengan memahami pentingnya bersedekah 
                  dan menjaga akhlak mulia, kita dapat membangun masyarakat yang lebih harmonis dan penuh kasih.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  Platform ini menyediakan berbagai ceramah dan artikel dari para ulama dan dai yang 
                  membahas tema-tema tersebut secara mendalam dan aplikatif untuk kehidupan sehari-hari.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-amber-100 dark:bg-amber-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Dermawan</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Menyebarkan ajaran tentang keutamaan bersedekah dan berinfaq di jalan Allah
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-amber-100 dark:bg-amber-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Tidak Merendahkan</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Mengajarkan pentingnya menjaga akhlak mulia dan tidak meremehkan orang lain
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-amber-100 dark:bg-amber-900/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">Konten Islami</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Menyediakan ceramah dan artikel dari para ulama dan dai terpercaya
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Misi Kami</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">1</span>
                  <span>Menyediakan konten dakwah yang berkualitas dan aplikatif</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">2</span>
                  <span>Menyebarkan nilai-nilai kebaikan dalam masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">3</span>
                  <span>Membantu masyarakat memahami pentingnya akhlak mulia</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">4</span>
                  <span>Memotivasi masyarakat untuk bersedekah dan berinfaq</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Nilai-Nilai Kami</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h3 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Kebenaran</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Kami menyajikan konten yang sesuai dengan Al-Quran dan Hadis yang sahih
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h3 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Kemudahan</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Platform yang mudah diakses untuk semua kalangan
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h3 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Kesederhanaan</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Menyampaikan ajaran Islam dengan cara yang sederhana dan aplikatif
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <h3 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Kebermanfaatan</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Setiap konten kami hadir untuk memberikan manfaat bagi pengguna
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}