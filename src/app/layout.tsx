'use client'; 
import { Poppins } from 'next/font/google';
import Link from 'next/link';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
        <nav className="flex justify-between items-center p-6 w-full h-20 bg-[#FDC435] opacity-70">
          <Link href="/" className="text-xl font-semibold">
            Sangeetha Narayanasamy
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="hover:text-gray-800">
              About
            </Link>
            <Link href="/experience" className="hover:text-gray-800">
              Experience
            </Link>
            <Link href="/blogs" className="hover:text-gray-800">
              Blogs
            </Link>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            {/* <FaHome className="text-black text-lg" />
            <FaUser className="text-black text-lg" />
            <FaBlog className="text-black text-lg" /> */}
            <button onClick={toggleSidebar} className="text-black text-2xl">
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="fixed top-0 left-0 w-3/4 h-full bg-gray-800 text-white z-50 p-6">
            <div className="space-y-6">
              <Link href="/" className="block text-xl" onClick={toggleSidebar}>
                Home
              </Link>
              <Link href="/about" className="block text-xl" onClick={toggleSidebar}>
                About
              </Link>
              <Link href="/experience" className="block text-xl" onClick={toggleSidebar}>
                Experience
              </Link>
              <Link href="/blogs" className="block text-xl" onClick={toggleSidebar}>
                Blogs
              </Link>
            </div>
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
