'use client'

import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import image from "../components/ui/Navigation.jpg";
import profileImage from "../components/ui/profile.jpeg";
import serviceWorker from "../components/ui/serviceWorker.png";
import twoPointer from "../components/ui/twoPointer.png";
export default function Home() {
  const projects = [
    {
      title: "Cloudside technology",
      role: "Software Engineer",
      timeLine: "Nov-2023 to Present",
      description: "Provide technical assistance to internal departments and developers. Hands-on experience in web and mobile app development (HTML, JavaScript, TypeScript, CSS, React, Redux, REST APIs, React Native, and Express). Written clean, maintainable, and efficient code following best practices and industry standards. Conducted code reviews and provided constructive feedback to team members to ensure high-quality deliverables. Received positive feedback from stakeholders and end-users for the quality and performance of developed applications.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Konnectify",
      role: "Full stack developer",
      timeLine: "April-2022 to October-2023",
      description: "Built an Integration DataStore Framework using event-driven architecture, automating third-party integrations and improving efficiency. Developed REST APIs and workflows for 5+ platforms, including QuickBooks, Xero, HubSpot, Stripe, and UKG, enhancing scalability. Created a generic parser for transforming diverse data formats into usable outputs. Worked with tools like Freshdesk and Dynamics 365 and utilized Google Cloud Platform services, including App Engine, Cloud Functions, and Firebase. Note: This experience reflects progression from an internship to a full-time role as a Full-Stack Product Developer.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const blogs = [
    {
      title: "Crafting Reliable Web Apps: Embracing Offline Accessibility with Service Workers",
      role: "Service worker",
      timeLine: "Nov-2023 to Present",
      description: "https://dev.to/sangeetha/crafting-reliable-web-apps-embracing-offline-accessibility-with-service-workers-3if1",
      image: serviceWorker,
    },
    {
      title: "Navigating React Native: A Deep Dive into Navigation Libraries",
      role: "React Native",
      timeLine: "April-2022 to October-2023",
      description: "https://dev.to/sangeetha/navigating-react-native-a-deep-dive-into-navigation-libraries-3dmh",
      image: image,
    },
    {
      title: "Two pointer pattern in DSA",
      role: "DSA",
      timeLine: "April-2022 to October-2023",
      description: "https://dev.to/sangeetha/two-pointer-pattern-in-dsa-5ae3",
      image: twoPointer,
    },

  ]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    }
  };

  return (
    <ParallaxProvider>
      <main className="max-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden text-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r" />
          <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
            <Parallax translateY={[-20, 20]} className="max-w-xl text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-yellow-400 font-medium">SOFTWARE ENGINEER</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Hey!, my name is <span className="text-yellow-400">Sangeetha</span>
                </h1>
                <p className="text-gray-800 mb-8 text-justify">
                  Experienced and accomplished software engineer with over 2.8+ years of expertise in full-stack development. Proven leader with a track record of guiding teams, managing complex projects, and delivering scalable applications. Skilled at prioritizing tasks, meeting deadlines, and achieving strategic objectives.
                </p>
              </motion.div>
            </Parallax>
            <Parallax translateY={[20, -20]} className="mt-10 md:mt-0 relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 blur-3xl opacity-20" />
                <Image
                  src={profileImage}
                  alt="Hero image"
                  className="rounded-2xl shadow-2xl w-[500px] h-[500px] md:w-[400px] md:h-[400px] relative z-10 object-cover"
                />
              </motion.div>
            </Parallax>
          </div>
        </section>

        <Parallax speed={-5}>
          <section className="container mx-auto px-4 py-20" id="about">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center text-[#FDC435]"
            >
              My Skills
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                "JavaScript", "React.Js", "Node.js", "TypeScript",
                "Next.js", "TailwindCSS", "React Native", "Git", "Redux", "Html & CSS", "Express.Js"
              ].map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Card className="bg-[#FDC435] border-none hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <p className="text-center font-medium">{skill}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </Parallax>

        {/* Projects Section */}
        <section id="work" className="py-20">
          <div className="container mx-auto px-4">
            <Parallax translateY={[-20, 20]}>
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-10 text-center text-[#FDC435]"
              >
                Experience
              </motion.h2>
            </Parallax>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {projects.map((item, index) => (
                <Parallax key={index} translateY={[50, -50]} opacity={[0.5, 1]}>
                  <motion.div variants={itemVariants}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="border-2 border-[#FDC435] max-h-[90%] rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="p-2">
                        <h3 className="text-xl font-semibold mb-2">{item.title} -({item.timeLine})</h3>
                        <h3 className="text-xl font-semibold mb-2 text-[#FDC435]">{item.role}</h3>
                        <ul className="text-gray-600 text-justify mb-4 list-disc list-inside">
                          {item.description.split('.').map((point, index) => (
                            point.trim() && <li key={index}>{point.trim()}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                </Parallax>
              ))}
            </motion.div>
          </div>
        </section>

        <Parallax speed={5}>
          <section id="blogs" className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-10 text-center text-[#FDC435]"
              >
                Latest Blogs
              </motion.h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogs.map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="  hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
                      <CardContent className="p-6 h-[90%]">
                        <div className="p-2 text-[#FDC435]">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                
                          <ul className="text-gray-600 text-justify mb-4 my-4 list-disc list-inside">
                            <a key={index} href={item.description}>
                              <Image
                                src={item.image}
                                alt="Hero image"
                                className="object-fit "
                              />
                            </a>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
                
                ))}
              </motion.div>
            </div>
          </section>
        </Parallax>
      </main>
    </ParallaxProvider >
  )
}

