import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import Seo from "@/components/Seo";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const ScheduleConsultation: React.FC = () => {
  const [form, setForm] = useState<any>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
          company_name: form.company,
          email: form.email,
          phone_number: form.phone,
          message: form.message || "I would like to inquire about your services."
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
    <>
      <Seo 
        title="Schedule Consultation | Invictus Data"
        description="Schedule a consultation with Invictus Data experts. Discuss your AI and data engineering needs with our team."
        keywords="schedule consultation, book meeting, AI consultation, data engineering consultation, expert consultation"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-8 px-5 flex flex-col items-center justify-center min-h-[80vh] pb-12">
        <section className="w-full max-w-2xl mx-auto text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 mt-24 unbounded">Schedule a Free Consultation</h1>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Ready to unlock new possibilities for your business? Fill out the form below and our experts will reach out to you for a free, no-obligation consultation.
          </p>
        </section>
        <form onSubmit={handleSubmit} className="bg-slate-50/95 border border-[#2563EB]/20 rounded-2xl shadow-2xl p-8 w-full max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-green-500 font-semibold text-center py-8">Thank you for scheduling your consultation! We'll be in touch soon.</div>
          ) : (
            <>
              {error && <div className="text-red-500 text-center mb-4">{error}</div>}
              <div className="mb-4 text-left">
                <label className="block text-sm font-medium mb-1 text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-[#2563EB]/30 bg-white text-slate-900 rounded-2xl px-3 py-2 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block text-sm font-medium mb-1 text-slate-700">Business Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@business.com"
                  className="w-full border border-[#2563EB]/30 bg-white text-slate-900 rounded-2xl px-3 py-2 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block text-sm font-medium mb-1 text-slate-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g., +1 234 567 8900"
                  className="w-full border border-[#2563EB]/30 bg-white text-slate-900 rounded-2xl px-3 py-2 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block text-sm font-medium mb-1 text-slate-700">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full border border-[#2563EB]/30 bg-white text-slate-900 rounded-2xl px-3 py-2 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]"
                  required
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block text-sm font-medium mb-1 text-slate-700">Message (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Let us know what you're looking for..."
                  className="w-full border border-[#2563EB]/30 bg-white text-slate-900 rounded-2xl px-3 py-2 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB] min-h-[80px]"
                />
              </div>
              <div className="flex justify-end mt-8">
                <button type="submit" className="bg-[#2563EB] p-4 text-white border-none rounded-3xl flex items-center gap-2" disabled={loading}>
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  ) : null}
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
    </>

  );
};

export default ScheduleConsultation; 