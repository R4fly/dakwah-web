"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, QrCode, CheckCircle, Smartphone, Copy, Check } from "lucide-react";

export default function QrisPaymentPage() {
  const [paymentPackage, setPaymentPackage] = useState<string>("basic");
  const [qrCodeData, setQrCodeData] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [isCompleted, setIsCompleted] = useState(false);
  const [qrImage, setQrImage] = useState<string | null>(null);

  // Get package from URL query params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pkg = urlParams.get('package');
    if (pkg && ['basic', 'premium', 'ultimate'].includes(pkg)) {
      setPaymentPackage(pkg);
    }
  }, []);

  // Generate QR code data and image using OpenAI API
  useEffect(() => {
    const generateQRCode = async () => {
      // Generate QR code data - in a real app, this would come from a payment gateway
      const qrData = `QRIS:${paymentPackage}:${Date.now()}`;
      setQrCodeData(qrData);

      try {
        // Call the API to generate a QR code image using OpenAI
        const response = await fetch('/api/generate-qris', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            package: paymentPackage,
            amount: getPackageDetails().price,
            description: `Pembayaran ${getPackageDetails().name} DakwahWeb`
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.imageUrl) {
            setQrImage(data.imageUrl);
          } else {
            // Fallback to canvas if API returns error
            console.error('API returned error, using fallback');
            createFallbackQRCode();
          }
        } else {
          // Fallback to canvas if API call fails
          console.error('Failed to generate QRIS code via API, using fallback');
          createFallbackQRCode();
        }
      } catch (error) {
        console.error('Error generating QR code:', error);

        // Fallback to canvas if API call fails
        createFallbackQRCode();
      }
    };

    generateQRCode();
  }, [paymentPackage]);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0 && !isCompleted) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isCompleted) {
      setIsCompleted(true);
    }
  }, [countdown, isCompleted]);

  // Get package details
  const getPackageDetails = () => {
    switch(paymentPackage) {
      case 'premium':
        return {
          name: "Paket Premium",
          price: "Rp. 106.900"
        };
      case 'ultimate':
        return {
          name: "Paket Ultimate",
          price: "Rp. 159.900"
        };
      case 'basic':
      default:
        return {
          name: "Paket Basic",
          price: "Rp. 77.900"
        };
    }
  };

  const packageDetails = getPackageDetails();

  // Function to create a fallback QR code using canvas
  const createFallbackQRCode = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvas.width = 200;
      canvas.height = 200;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 200, 200);
      ctx.fillStyle = 'black';

      // Draw a simple QR-like pattern
      ctx.fillRect(10, 10, 50, 50); // Corner square
      ctx.fillRect(140, 10, 50, 50); // Corner square
      ctx.fillRect(10, 140, 50, 50); // Corner square

      // Draw some random pattern to simulate QR code
      for (let i = 0; i < 200; i++) {
        if (Math.random() > 0.7) {
          const x = Math.floor(Math.random() * 170) + 15;
          const y = Math.floor(Math.random() * 170) + 15;
          ctx.fillRect(x, y, 5, 5);
        }
      }

      setQrImage(canvas.toDataURL());
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrCodeData);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md w-full text-center border border-amber-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-red-500 dark:text-red-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Waktu Pembayaran Habis</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Pembayaran untuk {packageDetails.name} belum diselesaikan dalam waktu yang ditentukan.
          </p>
          
          <div className="flex gap-3">
            <Link href="/pricing">
              <Button variant="outline" className="flex-1">
                Pilih Lagi
              </Button>
            </Link>
            <Link href={`/payment?package=${paymentPackage}`}>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                Coba Lagi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (qrImage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-amber-600">DakwahWeb</Link>
              
              <div className="flex items-center gap-4">
                <Link href={`/payment?package=${paymentPackage}`}>
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
          <div className="max-w-lg mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-amber-600 dark:hover:text-amber-400">Beranda</Link> / 
              <Link href="/pricing" className="hover:text-amber-600 dark:hover:text-amber-400">Langganan</Link> / 
              <Link href={`/payment?package=${paymentPackage}`} className="hover:text-amber-600 dark:hover:text-amber-400">Pembayaran</Link> / 
              <span className="text-amber-600 dark:text-amber-400"> QRIS</span>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-amber-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Pembayaran QRIS</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Scan QR code di bawah ini untuk menyelesaikan pembayaran
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 dark:text-gray-300">Paket:</span>
                  <span className="font-semibold text-gray-800 dark:text-white">{packageDetails.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Total Pembayaran:</span>
                  <span className="text-xl font-bold text-amber-600 dark:text-amber-400">{packageDetails.price}</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-xl inline-block shadow-inner">
                  <img 
                    src={qrImage} 
                    alt="QRIS Code" 
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Scan QR code ini menggunakan aplikasi dompet digital Anda
                </p>
              </div>

              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-3 mb-6">
                <span className="font-mono text-sm break-all max-w-[70%]">{qrCodeData}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={copyToClipboard}
                  className="h-8 w-8 p-0"
                >
                  {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full">
                  <span className="mr-2">Waktu tersisa:</span>
                  <span className="font-bold">{formatTime(countdown)}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Pembayaran harus diselesaikan sebelum waktu habis
                </p>
              </div>

              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-6">
                <Smartphone className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="font-medium">Cara Pembayaran:</p>
                  <ol className="list-decimal list-inside space-y-1 mt-1">
                    <li>Buka aplikasi dompet digital (GoPay, OVO, Dana, dll)</li>
                    <li>Pilih menu "Scan QR"</li>
                    <li>Arahkan kamera ke QR code di atas</li>
                    <li>Verifikasi pembayaran dan konfirmasi</li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-all duration-300"
                  onClick={() => setIsCompleted(true)}
                >
                  Saya Telah Melakukan Pembayaran
                </Button>
                <Link href={`/payment?package=${paymentPackage}`}>
                  <Button variant="outline" className="w-full">
                    Kembali ke Metode Pembayaran
                  </Button>
                </Link>
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

  // Loading state
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <QrCode className="w-8 h-8 text-amber-600 dark:text-amber-400 animate-pulse" />
        </div>
        <p className="text-gray-700 dark:text-gray-300">Membuat kode QRIS...</p>
      </div>
    </div>
  );
}