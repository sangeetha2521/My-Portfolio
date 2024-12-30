
import Image from 'next/image'
import { Button } from './ui/button'

interface ProjectCardProps {
  title: string
  description: string
  image: string
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Button variant="outline">View Project</Button>
      </div>
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

