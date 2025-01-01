
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'A portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-900`}>
        <nav className="flex justify-between bg-[#FDC435]  items-center p-6  w-full h-20 ">
          <Link href="/" className="text-xl font-semibold">Sangeetha Narayanasamy</Link>
          <div className="space-x-8">
            <Link href="/about" className="hover:text-[#FDC435]">About</Link>
            <Link href="/experience" className="hover:text-[#FDC435]">Experience</Link>
            {/* <Link href="/contact" className="hover:text-[#FDC435]">Contact</Link> */}
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

