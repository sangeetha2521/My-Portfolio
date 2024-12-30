import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
          <a href="/" className="text-xl font-semibold">Sangeetha Narayanasamy</a>
          <div className="space-x-8">
            <a href="/about" className="hover:text-[#FDC435]">About</a>
            <a href="/experience" className="hover:text-[#FDC435]">Experience</a>
            <a href="/contact" className="hover:text-[#FDC435]">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

