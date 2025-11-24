"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, QrCode, CreditCard, Smartphone, Wallet, CheckCircle } from "lucide-react";

export default function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [paymentPackage, setPaymentPackage] = useState<string>("basic");
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  // Get package from URL query params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pkg = urlParams.get('package');
    if (pkg && ['basic', 'premium', 'ultimate'].includes(pkg)) {
      setPaymentPackage(pkg);
    }
  }, []);

  const getPackageDetails = () => {
    switch(paymentPackage) {
      case 'premium':
        return {
          name: "Paket Premium",
          price: "Rp. 106.900",
          period: "/bulan",
          features: [
            "Akses semua konten publik",
            "Download maksimal 10 konten premium",
            "Notifikasi konten baru",
            "Konsultasi langsung (2x/bulan)",
            "E-book eksklusif",
            "Akses arsip penuh"
          ]
        };
      case 'ultimate':
        return {
          name: "Paket Ultimate",
          price: "Rp. 159.900",
          period: "/bulan",
          features: [
            "Akses semua konten publik",
            "Download semua konten premium",
            "Notifikasi konten baru",
            "Konsultasi langsung (sepuasnya)",
            "Semua E-book eksklusif",
            "Akses arsip penuh"
          ]
        };
      case 'basic':
      default:
        return {
          name: "Paket Basic",
          price: "Rp. 77.900",
          period: "/bulan",
          features: [
            "Akses semua konten publik",
            "Download maksimal 3 konten premium",
            "Notifikasi konten baru",
            "Akses arsip penuh"
          ]
        };
    }
  };

  const packageDetails = getPackageDetails();

  const handlePaymentSelection = (method: string) => {
    setSelectedPayment(method);
  };

  const handlePayment = () => {
    if (selectedPayment) {
      if (selectedPayment === 'qris') {
        // Redirect to QRIS page with package info
        window.location.href = `/payment/qris?package=${paymentPackage}`;
      } else {
        // Simulate payment process for other methods
        setIsPaymentComplete(true);
        // In a real app, this would connect to a payment gateway
      }
    }
  };

  if (isPaymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md w-full text-center border border-amber-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500 dark:text-green-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Pembayaran Berhasil!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Terima kasih telah berlangganan {packageDetails.name}. Akun Anda telah diupgrade.
          </p>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 mb-6">
            <p className="text-amber-800 dark:text-amber-200 font-medium">
              Total Pembayaran: <span className="text-lg">{packageDetails.price}{packageDetails.period}</span>
            </p>
          </div>
          
          <Link href="/">
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-600">DakwahWeb</Link>
            
            <div className="flex items-center gap-4">
              <Link href={`/pricing#package-${paymentPackage}`}>
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-amber-600 dark:hover:text-amber-400">Beranda</Link> /
            <Link href="/pricing" className="hover:text-amber-600 dark:hover:text-amber-400">Langganan</Link> /
            <span className="text-amber-600 dark:text-amber-400"> Pembayaran</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Package Details */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 border border-amber-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Detail Paket</h2>
                <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-4">{packageDetails.name}</h3>
                
                <div className="flex items-baseline mb-4">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">{packageDetails.price}</div>
                  <div className="text-gray-500 dark:text-gray-400 ml-2">{packageDetails.period}</div>
                </div>
                
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Fitur yang Didapat:</h4>
                <ul className="space-y-2">
                  {packageDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment Methods */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-amber-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Metode Pembayaran</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {/* GoPay */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPayment === 'gopay' 
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700'
                    }`}
                    onClick={() => handlePaymentSelection('gopay')}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">GoPay</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Pembayaran melalui GoPay</p>
                      </div>
                    </div>
                  </div>

                  {/* Dana */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPayment === 'dana' 
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700'
                    }`}
                    onClick={() => handlePaymentSelection('dana')}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <Wallet className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">Dana</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Pembayaran melalui Dana</p>
                      </div>
                    </div>
                  </div>

                  {/* QRIS */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPayment === 'qris' 
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700'
                    }`}
                    onClick={() => handlePaymentSelection('qris')}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mr-4">
                        <QrCode className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">QRIS</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Scan QR untuk pembayaran</p>
                      </div>
                    </div>
                  </div>

                  {/* Bank Transfer */}
                  <div 
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPayment === 'bank' 
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700'
                    }`}
                    onClick={() => handlePaymentSelection('bank')}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">Bank Transfer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">BCA, BNI, BRI, Mandiri</p>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedPayment && (
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Instruksi Pembayaran</h3>
                    {selectedPayment === 'gopay' && (
                      <p className="text-amber-700 dark:text-amber-300">
                        Buka aplikasi Gojek, pilih GoPay, lalu scan QR code yang akan muncul setelah Anda menekan tombol {'"Bayar"'}.
                      </p>
                    )}
                    {selectedPayment === 'dana' && (
                      <p className="text-amber-700 dark:text-amber-300">
                        Buka aplikasi DANA, pilih bayar, lalu scan QR code yang akan muncul setelah Anda menekan tombol {'"Bayar"'}.
                      </p>
                    )}
                    {selectedPayment === 'qris' && (
                      <p className="text-amber-700 dark:text-amber-300">
                        Scan QRIS yang akan muncul setelah Anda menekan tombol {'"Bayar"'} menggunakan aplikasi dompet digital Anda.
                      </p>
                    )}
                    {selectedPayment === 'bank' && (
                      <p className="text-amber-700 dark:text-amber-300">
                        Lakukan transfer ke nomor virtual account yang akan ditampilkan setelah Anda menekan tombol {'"Bayar"'}.
                      </p>
                    )}
                  </div>
                )}

                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                  onClick={handlePayment}
                  disabled={!selectedPayment}
                >
                  {selectedPayment ? `Bayar ${packageDetails.price}` : "Pilih Metode Pembayaran"}
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sticky top-6 border border-amber-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Ringkasan Pesanan</h2>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400">{packageDetails.name}</span>
                  <span className="text-gray-800 dark:text-white font-medium">{packageDetails.price}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Pajak</span>
                  <span className="text-gray-800 dark:text-white font-medium">Rp. 0</span>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 my-4 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-800 dark:text-white font-semibold">Total</span>
                    <span className="text-xl font-bold text-amber-600 dark:text-amber-400">{packageDetails.price}</span>
                  </div>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Pembayaran akan diproses dalam waktu 5 menit setelah konfirmasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">DakwahWeb</h3>
          <p className="text-gray-400 mb-4">
            Platform dakwah tentang pentingnya bersikap dermawan dan tidak merendahkan orang lain
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/" className="text-gray-300 hover:text-white">Beranda</Link>
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