'use client';

import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/contact/PageHero';
import LocationIcon from '../components/icons/location.svg';
import PhoneIcon from '../components/icons/phone.svg';
import EmailIcon from '../components/icons/email.svg';
import SendIcon from '../components/icons/send.svg';
import { User, Mail, Tag, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <PageWrapper>
      <main className="min-h-screen">
      <Header />
      <PageHero />

      {/* Contact Info Cards */}
      <section className="pb-20 bg-[#fef3f2]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#ff3333]/10 mb-6">
                <LocationIcon className="w-6 h-6" style={{ color: '#ff3333' }} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-3">Address</h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                International City,<br />
                Dubai, #AE
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#ff3333]/10 mb-6">
                <PhoneIcon className="w-6 h-6" style={{ color: '#ff3333' }} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-3">Phone</h3>
              <div className="text-[#6b7280] text-sm space-y-2">
                <a
                  href="tel:+971585912084"
                  className="flex items-center justify-center gap-2 hover:text-[#ff3333] transition-colors"
                >
                  <span className="text-base leading-none shrink-0" title="United Arab Emirates" aria-hidden>
                    🇦🇪
                  </span>
                  <span>+971 58 591 2084</span>
                </a>
                <a
                  href="tel:+918144990728"
                  className="flex items-center justify-center gap-2 hover:text-[#ff3333] transition-colors"
                >
                  <span className="text-base leading-none shrink-0" title="India" aria-hidden>
                    🇮🇳
                  </span>
                  <span>+91 8144990728</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#ff3333]/10 mb-6">
                <EmailIcon className="w-6 h-6" style={{ color: '#ff3333' }} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-3">Email</h3>
              <p className="text-[#6b7280] text-sm">hello@tsrlab.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#fef3f2]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Form Header */}
            <div className="text-center space-y-4 mb-12">
              <p className="text-xs font-bold tracking-[0.15em] text-[#ff3333] uppercase">
                Get In Touch
              </p>
              <h2 className="text-4xl font-bold text-[#111827] leading-tight">
                If you got any questions<br />
                please do not hesitate to send us a<br />
                message
              </h2>
            </div>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-gray-200 bg-[#f9fafb] focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-gray-200 bg-[#f9fafb] focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]">
                    <Tag className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-gray-200 bg-[#f9fafb] focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-[#f9fafb] focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm text-[#1f2937] placeholder:text-[#9ca3af] resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white font-semibold text-base shadow-lg shadow-[#ff3333]/30 hover:shadow-xl hover:shadow-[#ff3333]/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <SendIcon className="w-4 h-4" style={{ color: '#ffffff' }} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-0 relative bg-[#fef3f2]">
        <div className="w-full h-[400px] relative">
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.189883834848!2d55.41476!3d25.170084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5e5e5e5e5f%3A0x1234567890abcdef!2sInternational%20City%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          />
          
          {/* Location Card Overlay */}
          <div className="absolute bottom-8 right-8 bg-white rounded-xl p-6 shadow-lg max-w-sm">
            <h3 className="text-lg font-bold text-[#111827] mb-2">Our Location</h3>
            <p className="text-sm text-[#6b7280] mb-4">
              Dubai International City,<br />
              Warsan airst – Dubai – United Arab Emirates
            </p>
            <a
              href="https://maps.google.com/?q=Dubai+International+City"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff3333] hover:text-[#f97316] transition-colors"
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </PageWrapper>
  );
}