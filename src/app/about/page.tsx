import ContactForm from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import profileImage from "../../components/ui/profile.jpeg";

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20 ">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-6 text-[#FDC435]">About me</h1>
              <p className="text-white mb-8">
                Experienced and accomplished software engineer with over 2+ years of expertise in full-stack development. Proven leader with a track record of guiding teams, managing complex projects, and delivering scalable applications. Skilled at prioritizing tasks, meeting deadlines, and achieving strategic objectives.
              </p>
              <Link href="../../../public/static/sangeetha/Sangeetha.pdf" target={"_blank"}>
                <Button className="mt-4 rounded-md outline text-sm px-4 py-2 bg-primary-color-700 text-white">
                  Download Resume
                </Button>
              </Link>


            </div>
            <div className="flex-1">
              <div className="mt-10 md:mt-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 blur-3xl opacity-20" />
                <Image
                  src={profileImage}
                  alt="Hero image"
                  className="rounded-2xl shadow-2xl w-[500px] h-[500px] md:w-[400px] md:h-[400px] relative z-10 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

