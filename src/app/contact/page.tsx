import ContactForm from '@/components/contact-form';
export default function Contact() {
  return (
    <main className="min-h-screen">
       <section className="py-20 relative overflow-hidden ">
            <div className="absolute bottom-0 w-full h-32 bg-[#FDC435] rounded-tr-[100px]" />
            <div className="container mx-auto px-6 relative">
              <h2 className="text-4xl font-bold text-center mb-12 text-[#FDC435]">Contact Me</h2>
              <ContactForm />
              <div className="flex justify-center space-x-6 mt-12">
    
                <Link href="https://www.linkedin.com/in/25sangeetha/" className="text-gray-600 hover:text-[#FDC435]">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="devsangisuresh@gmail.com" className="text-gray-600 hover:text-[#FDC435]">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
              <p className="text-center text-gray-600 mt-8">Sangeetha Narayanasamy@2025</p>
            </div>
          </section>
    </main>
  )
}

