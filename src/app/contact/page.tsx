// src/app/contact/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear error when user types in a field
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subjek wajib diisi';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
            Kontak Kami
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Hubungi kami untuk pertanyaan, saran, atau kerjasama
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@smk2-yk.sch.id</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white">Telepon</h3>
                    <p className="text-gray-600 dark:text-gray-400">(0274) 513490</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white">Alamat</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Jalan AM Sangaji No. 47<br />
                      Jetis, Yogyakarta
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">Pesan Terkirim!</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300">Nama:</h4>
                        <p className="text-gray-900 dark:text-gray-100">{formData.name}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300">Email:</h4>
                        <p className="text-gray-900 dark:text-gray-100">{formData.email}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300">Subjek:</h4>
                        <p className="text-gray-900 dark:text-gray-100">{formData.subject}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 dark:text-gray-300">Pesan:</h4>
                        <p className="text-gray-900 dark:text-gray-100 whitespace-pre-line">{formData.message}</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full flex items-center gap-2 mt-4"
                    >
                      Kirim Pesan Lain
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Nama Lengkap
                      </label>
                      <Input
                        id="name"
                        placeholder="Nama Anda"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@contoh.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subjek
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subjek pesan"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={errors.subject ? 'border-red-500' : ''}
                      />
                      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Pesan
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tulis pesan Anda di sini..."
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <Button type="submit" className="w-full flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Kirim Pesan
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Jam Operasional</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white mb-2">Senin - Jumat</h3>
                    <p className="text-gray-600 dark:text-gray-400">06:45 - 15:35 WIB</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white mb-2">Sabtu - Minggu</h3>
                    <p className="text-gray-600 dark:text-gray-400">Tutup</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}