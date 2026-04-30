'use client';

import React, { useState } from 'react';
import SendIcon from './icons/send.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    const apiBase = process.env.NEXT_PUBLIC_API_URL;
    if (!apiBase) {
      setSubmitStatus({
        type: 'error',
        message: 'API URL is not configured. Please set NEXT_PUBLIC_API_URL.',
      });
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Name and email are required.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const subjectText = formData.subject.trim() || 'Schedule a call request';
      const response = await fetch(`${apiBase}/app/contact-us`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          website: formData.website.trim() || undefined,
          subject: subjectText,
          message: formData.message.trim() || undefined,
          source: 'home-schedule-call',
        }),
      });

      const json = await response.json().catch(() => ({}));
      if (!response.ok || json.success === false) {
        const errMsg =
          typeof json?.message === 'string'
            ? json.message
            : Array.isArray(json?.message)
              ? json.message.join('; ')
              : 'Failed to submit form';
        throw new Error(errMsg);
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thanks! Your request has been submitted. We will contact you shortly.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit form',
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
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#fef3f2] to-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-bold tracking-[0.15em] text-[#ff3333] uppercase">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">
            Schedule A Call
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#4b5563] px-4">
            Let's discuss how we can help your business grow.<br />
            Schedule a consultation call with our team today.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={`max-w-3xl mx-auto space-y-6 md:space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {submitStatus.type ? (
            <div
              className={`rounded-lg border p-4 text-sm ${
                submitStatus.type === 'success'
                  ? 'border-green-200 bg-green-50 text-green-700'
                  : 'border-red-200 bg-red-50 text-red-700'
              }`}
            >
              {submitStatus.message}
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              disabled={isSubmitting}
              className="bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              disabled={isSubmitting}
              className="bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              disabled={isSubmitting}
              className="bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
            <input
              type="url"
              name="website"
              placeholder="Company website (optional)"
              value={formData.website}
              onChange={handleChange}
              autoComplete="url"
              disabled={isSubmitting}
              className="bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Topic or goal (optional)"
              value={formData.subject}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us briefly what you would like to discuss (optional)"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full bg-white px-4 md:px-6 py-3.5 md:py-5 rounded-lg md:rounded-xl border border-gray-200 focus:outline-none focus:border-[#ff3333] focus:ring-2 focus:ring-[#ff3333]/20 text-sm md:text-base text-[#1f2937] placeholder:text-[#9ca3af] transition-all resize-y min-h-[100px]"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white font-semibold text-sm md:text-base shadow-lg shadow-[#ff3333]/30 hover:shadow-xl hover:shadow-[#ff3333]/40 hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Submitting...' : 'Schedule A Call'}
              <SendIcon className="w-4 h-4" style={{ color: '#ffffff' }} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}