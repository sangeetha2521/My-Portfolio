import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import profileImage from "../components/ui/profile.jpeg";
export default function Home() {
  const projects = [
    {
      title: "Cloudside technology",
      role: "Software Engineer",
      timeLine: "Nov-2023 to Present",
      description: " Provide technical assistance to internal departments and developers.Hands-on experience in web and mobile app development (HTML, JavaScript, TypeScript, CSS, React, Redux, REST APIs, React Native, and Express).Written clean, maintainable, and efficient code following best practices and industry standards.Conducted code reviews and provided constructive feedback to team members to ensure high-quality deliverables.Received positive feedback from stakeholders and end-users for the quality and performance of developed applications.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Konnectify",
      role: "Full stack developer",
      timeLine: "April-2022 to October-2023",
      description: "Built an Integration DataStore Framework using event-driven architecture, automating third-party integrations and improving efficiency.Developed REST APIs and workflows for 5+ platforms, including QuickBooks, Xero, HubSpot, Stripe, and UKG, enhancing scalability.Created a generic parser for transforming diverse data formats into usable outputs.Worked with tools like Freshdesk and Dynamics 365 and utilized Google Cloud Platform services, including App Engine, Cloud Functions, and Firebase.Note: This experience reflects progression from an internship to a full-time role as a Full-Stack Product Developer.",
      image: "/placeholder.svg?height=400&width=400",
    },

  ]

  return (
    <main className="min-h-screen bg-gradient-to-r  from-gray-900 to-gray-800/50 bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900  text-white">

        <div className="absolute inset-0 bg-gradient-to-r  from-gray-900 to-gray-800/50" />
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-yellow-400 font-medium mb-4">SOFTWARE ENGINEER</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hey!, my name is <span className="text-yellow-400">Sangeetha</span>
            </h1>
            <p className="text-gray-300 mb-8 text-justify">
              Experienced and accomplished software engineer with over 2+ years of expertise in full-stack development. Proven leader with a track record of guiding teams, managing complex projects, and delivering scalable applications. Skilled at prioritizing tasks, meeting deadlines, and achieving strategic objectives.
            </p>
            {/* <div className="space-x-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">Projects</Button>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">LinkedIn</Button>
            </div> */}
          </div>
          <div className="mt-10 md:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 blur-3xl opacity-20" />
            <Image
              src={profileImage}
              alt="Hero image"
              className="rounded-2xl shadow-2xl w-[500px] h-[500px] md:w-[400px] md:h-[400px] relative z-10 object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto   px-4 py-20" id="about">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#FDC435]">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "JavaScript", "React.Js", "Node.js", "TypeScript",
            "Next.js", "TailwindCSS", "React Native", "Git", "Redux", "Html & CSS", "Express.Js"
          ].map((skill) => (
            <Card key={skill} className="bg-[#FDC435] border-none">
              <CardContent className="p-6">
                <p className="text-center font-medium">{skill}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#FDC435] "> Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* <Image
                  src={`/placeholder.svg?height=250&width=400&text=Project+${item}`}
                  alt={`Project ${item.title}`}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                /> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title} -({item.timeLine})</h3>
                  <h3 className="text-xl font-semibold mb-2">{item.role}</h3>

                  <ul className="text-gray-600 text-justify mb-4 list-disc list-inside">
                    {item.description.split('.').map((point, index) => (
                      point.trim() && <li key={index}>{point.trim()}</li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden ">
        <div className="absolute bottom-0 w-full h-32 bg-[#FDC435] rounded-tr-[100px]" />
        <div className="container mx-auto px-6 relative">
          {/* <h2 className="text-4xl font-bold text-center mb-12 text-[#FDC435]">Contact Me</h2>
          <ContactForm /> */}
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

