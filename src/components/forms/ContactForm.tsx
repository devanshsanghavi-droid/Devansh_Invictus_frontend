import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const API_URL = import.meta.env.DEV
        ? '/api/internal/v1/auth/contactUs'  // Development: use Vite proxy
        : 'https://staging.trilio.ai/internal/v1/auth/contactUs'; // Production: full URL

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      });
      if (!response.ok) throw new Error('Failed to submit. Please try again.');
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-2xl shadow-xl max-w-lg w-full mx-auto px-8 py-10 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-slate-900 font-['Lexend'] tracking-tight">Contact Us</h2>
      {submitted ? (
        <div className="text-center">
          <div className="text-green-600 font-semibold text-lg">Thank you for reaching out!</div>
          <div className="text-slate-600 mt-2">We'll get back to you within 24 hours.</div>
        </div>
      ) : (
        <>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          <div className="mb-5 w-full">
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white border border-slate-300 focus:border-[#2563EB] text-slate-900 rounded-xl px-4 py-3 font-['DM_Sans'] placeholder:text-slate-400 focus:outline-none transition"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white border border-slate-300 focus:border-[#2563EB] text-slate-900 rounded-xl px-4 py-3 font-['DM_Sans'] placeholder:text-slate-400 focus:outline-none transition"
              placeholder="you@email.com"
              required
            />
          </div>
          <div className="mb-7 w-full">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white border border-slate-300 focus:border-[#2563EB] text-slate-900 rounded-xl px-4 py-3 font-['DM_Sans'] placeholder:text-slate-400 focus:outline-none transition"
              placeholder="How can we help you?"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold py-3 rounded-xl shadow-md transition-all text-lg font-['Lexend'] tracking-wide flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            )}
            Send Message
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm; 