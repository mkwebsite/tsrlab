'use client';

import React, { useState } from 'react';

interface ReportInquiryGateProps {
  apiBase: string;
  reportUrl: string;
  articleSlug: string;
}

export default function ReportInquiryGate({ apiBase, reportUrl, articleSlug }: ReportInquiryGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    mobile: '',
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.companyName.trim() || !formData.email.trim() || !formData.mobile.trim()) {
      setError('All fields are required.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${apiBase.replace(/\/+$/, '')}/app/report-inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          companyName: formData.companyName.trim(),
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          articleSlug,
          reportUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to submit inquiry' }));
        throw new Error(errorData.message || 'Failed to submit inquiry');
      }

      setIsOpen(false);
      window.open(reportUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit inquiry');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#ff3333] to-[#f97316] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        View Report (PDF)
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900">View Report</h3>
            <p className="mt-1 text-sm text-gray-600">
              Fill this form to access the report PDF.
            </p>

            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              {error ? (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>
              ) : null}

              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none focus:border-[#ff3333]"
                disabled={isSubmitting}
              />
              <input
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none focus:border-[#ff3333]"
                disabled={isSubmitting}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none focus:border-[#ff3333]"
                disabled={isSubmitting}
              />
              <input
                type="text"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) => setFormData((prev) => ({ ...prev, mobile: e.target.value }))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none focus:border-[#ff3333]"
                disabled={isSubmitting}
              />

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-[#ff3333] to-[#f97316] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit & View'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
