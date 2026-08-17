import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Seo from "@/components/Seo";

const Contact: React.FC = () => {
  return (
    <>
      <Seo
        title="Contact Us | Invictus Data"
        description="Get in touch with Invictus Data. Let's discuss how we can transform your business with AI and data engineering solutions. Contact our team today."
        keywords="contact invictus data, get in touch, AI consultation, data engineering contact, business inquiry, schedule consultation"
      />
      <Navbar />
      <div className="w-full min-h-screen bg-white overflow-hidden relative">
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto flex flex-col items-center justify-center pt-24 pb-16 px-4">
          <div className="max-w-2xl w-full text-center mb-10">
            <h1 className="text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Contact Us</h1>
            <p className="text-lg text-slate-600 font-['DM_Sans']">
              Have a question or want to work with us? Fill out the form below and our team will get back to you soon.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;