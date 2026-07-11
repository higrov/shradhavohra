'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const body = new FormData();
      body.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '');
      body.append('subject', 'New inquiry from shradhavohra website');
      body.append('from_name', formData.name);
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#F7E0E4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#1A5C5C] font-semibold mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A5C5C]">Contact Us</h2>
          <p className="text-xl text-gray-600 mt-4">
            Have questions or need to schedule an appointment? We&apos;re here to help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#F9C7D4] p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-[#1A5C5C] mb-2">Phone</h3>
              <a href="tel:+919967460404" className="text-[#1A5C5C] hover:underline">
                +91 99674 60404
              </a>
              <p className="text-gray-500 text-sm">Mon-Sat, 9am-5pm</p>
            </div>

            <div className="bg-[#F9C7D4] p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-[#1A5C5C] mb-2">Email</h3>
              <a href="mailto:drshradhavohra@gmail.com" className="text-[#1A5C5C] hover:underline">
                drshradhavohra@gmail.com
              </a>
              <p className="text-gray-500 text-sm">We&apos;ll respond within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-[#F9C7D4] p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#134A4A] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#134A4A] rounded-lg focus:ring-2 focus:ring-[#1A5C5C] focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#134A4A] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#134A4A] rounded-lg focus:ring-2 focus:ring-[#1A5C5C] focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#134A4A] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-[#134A4A] rounded-lg focus:ring-2 focus:ring-[#1A5C5C] focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#134A4A] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-[#134A4A] rounded-lg focus:ring-2 focus:ring-[#1A5C5C] focus:border-transparent outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#1A5C5C] text-white py-4 rounded-lg font-semibold hover:bg-[#134A4A] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-sm text-[#1A5C5C] font-semibold text-center">
                  Thank you for your message! We will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 font-semibold text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
              <p className="text-sm text-gray-500 text-center">
                This form is for general inquiries. For medical emergencies, please call 108.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
