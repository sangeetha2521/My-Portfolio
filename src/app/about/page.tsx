import Image from 'next/image';
import Link from 'next/link';
import profileImage from "../../components/ui/profile.jpeg";

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Content */}
            <div className="flex-1 px-4 md:px-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#FDC435] text-center md:text-left">About me</h1>
              <div className="bg-gray-900 text-white text-justify p-6 md:p-8 rounded-lg shadow-md">
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Hey there! 👋
                  <br />
                  Im <strong>Sangeetha</strong>, a passionate Software Engineer who loves turning ideas into reality through clean, functional, and visually appealing designs.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  When Im not busy coding or brainstorming design solutions, you can find me:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>🎨 Doodling random sketches (and pretending Im the next Picasso 🖌️).</li>
                  <li>🌍 Daydreaming about my next travel destination or binge-watching sci-fi shows.</li>
                </ul>
                <p className="text-base md:text-lg leading-relaxed mt-6">
                  I believe in lifelong learning, collaboration, and creating things that make people go “Wow!” 🌟 Whether its crafting seamless user experiences, optimizing performance, or just making things look awesome, Im all in.
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-6">
                  Lets build something amazing together—whether its your next big project, an innovative idea, or just sharing some good vibes. 🚀
                </p>
                <p className="text-base md:text-lg leading-relaxed mt-6">
                  Feel free to connect with me on
                  <Link href="https://www.linkedin.com/in/25sangeetha/" className="text-[#FDC435] hover:underline"> LinkedIn</Link>!
                </p>
                <p className="text-base md:text-lg mt-8 font-semibold text-center md:text-left">Cheers,</p>
                <p className="text-base md:text-lg font-semibold text-center md:text-left">Sangeetha 😊</p>
                <div className="flex justify-center md:justify-start">
                  <Link href="../../../public/static/sangeetha/Sangeetha.pdf" target={"_blank"}>
                    <button className="mt-4 rounded-md text-sm px-4 py-2 bg-[#FDC435] text-white shadow hover:bg-yellow-400 transition">
                      Download Resume
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center md:justify-end xl:mt-28 px-4 md:px-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 blur-3xl opacity-20" />
                <Image
                  src={profileImage}
                  alt="Hero image"
                  className="rounded-2xl shadow-2xl w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover relative z-10"
                />
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <ContactForm />
        </div>
      </section> */}
    </main>
  )
}

