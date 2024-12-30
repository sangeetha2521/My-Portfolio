export default function Experience() {
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
          description: "uilt an Integration DataStore Framework using event-driven architecture, automating third-party integrations and improving efficiency.Developed REST APIs and workflows for 5+ platforms, including QuickBooks, Xero, HubSpot, Stripe, and UKG, enhancing scalability.Created a generic parser for transforming diverse data formats into usable outputs.Worked with tools like Freshdesk and Dynamics 365 and utilized Google Cloud Platform services, including App Engine, Cloud Functions, and Firebase.Note: This experience reflects progression from an internship to a full-time role as a Full-Stack Product Developer.",
          image: "/placeholder.svg?height=400&width=400",
        },
    
      ]
  return (
    <main className="min-h-screen">
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
    </main>
  )
}

