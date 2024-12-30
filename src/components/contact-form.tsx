'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
      <div className="space-y-6 text-[#FDC435]">
        <div>
          <label htmlFor="name" className="block text-sm font-medium ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full p-4 border rounded-md border-gray-300 shadow-sm focus:border-[#FDC435] focus:ring-[#FDC435]"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full p-4 border rounded-md border-gray-300 shadow-sm focus:border-[#FDC435] focus:ring-[#FDC435]"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full p-4  border rounded-md border-gray-300 shadow-sm focus:border-[#FDC435] focus:ring-[#FDC435]"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full bg-yellow-400 hover:bg-[#FDC435]">
          Send
        </Button>
      </div>
    </form>
  )
}

