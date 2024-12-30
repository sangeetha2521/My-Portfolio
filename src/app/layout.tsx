
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'A modern portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <nav className="flex justify-between bg-[#FDC435]  items-center p-6  w-full h-20 ">
          <Link href="/" className="text-xl font-semibold">Sangeetha Narayanasamy</Link>
          <div className="space-x-8">
            <Link href="/about" className="hover:text-[#FDC435]">About</Link>
            <Link href="/experience" className="hover:text-[#FDC435]">Experience</Link>
            <Link href="/contact" className="hover:text-[#FDC435]">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

