import Image from 'next/image';
import image from "../../components/ui/Navigation.jpg";
import serviceWorker from "../../components/ui/serviceWorker.png";
import twoPointer from "../../components/ui/twoPointer.png";
export default function Blogs() {
  const projects = [
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
  return (
    <main className="min-h-screen mt-10">
      <section id="work" className="">
      
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#FDC435] "> Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
            {projects.map((item, index) => (
              <div key={index} className="rounded-lg shadow-2xl  border-2 border-[#FDC435] overflow-hidden">
                {/* <Image
                  src={`/placeholder.svg?height=250&width=400&text=Project+${item}`}
                  alt={`Project ${item.title}`}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                /> */}
                <div className="p-6 text-[#FDC435]">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <h3 className="text-xl font-semibold mb-2">{item.role}</h3>

                  <ul className="text-gray-600 text-justify mb-4 my-4 list-disc list-inside">

                    <a key={index} href={item.description}><Image
                      src={item.image}
                      alt="Hero image"
                      className="object-cover"
                    /></a>

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

