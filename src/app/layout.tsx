import { type Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DakwahWeb - Media Dakwah Dermawan & Tidak Merendahkan',
  description: 'Platform dakwah tentang pentingnya bersikap dermawan dan tidak merendahkan orang lain',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-between items-center p-4 gap-4 h-16 border-b">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xl font-bold text-amber-600">DakwahWeb</Link>
              <nav className="hidden md:flex items-center gap-4 text-sm">
                <Link href="/" className="font-medium">Beranda</Link>
                <Link href="/content" className="font-medium">Konten</Link>
                <Link href="/pricing" className="font-medium">Langganan</Link>
                <Link href="/about" className="font-medium">Tentang</Link>
                <Link href="/contact" className="font-medium">Kontak</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" size="sm">Masuk</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <Link href="/about">
                <Button variant="outline" size="sm">Tentang</Button>
              </Link>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}