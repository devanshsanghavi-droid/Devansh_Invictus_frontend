import React from "react";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Seo from "@/components/Seo";

const About: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <>
      <Seo
        title="About Us | Invictus Data"
        description="Learn about Invictus Data's mission to transform businesses through AI and data engineering excellence. Meet our team and discover our approach to innovation."
        keywords="about invictus data, AI company, data engineering team, mission vision, technology innovation, global team"
      />
      <div className="w-full min-h-screen bg-white overflow-hidden relative">
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="relative z-20">
          <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
        </div>
        <main className="relative z-10 w-full max-w-5xl mx-auto pt-32 px-6 pb-24 flex flex-col items-center">
          {/* Hero Section */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-center font-['Lexend']">About Invictus</h1>
          <p className="text-xl text-slate-700 mb-12 text-center max-w-2xl font-['DM_Sans']">
            We are a global team of engineers, data scientists, and innovators on a mission to help businesses unlock the power of data and AI. Our solutions drive real-world impact, from startups to Fortune 500s.
          </p>
          {/* Mission & Vision */}
          <section className="w-full bg-white rounded-3xl p-8 md:p-12 mb-10 flex flex-col gap-4 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2563EB] mb-2 unbounded">Our Mission</h2>
            <p className="text-base md:text-lg text-slate-600 mb-4">Empower organizations to make smarter decisions, innovate faster, and scale with confidence through world-class data and AI solutions.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2563EB] mb-2 unbounded">Our Vision</h2>
            <p className="text-base md:text-lg text-slate-600">To be the most trusted partner for digital transformation, known for our technical excellence, integrity, and impact-driven culture.</p>
          </section>
          {/* Team & Culture */}
          <section className="w-full bg-white rounded-3xl p-8 md:p-12 flex flex-col gap-4 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2563EB] mb-2 unbounded">Our Team & Culture</h2>
            <p className="text-base md:text-lg text-slate-600 mb-4">At Invictus, we believe in the power of diverse perspectives, continuous learning, and a collaborative spirit. Our team is passionate about solving complex problems and delivering value for our clients every day.</p>
            <ul className="list-disc list-inside text-slate-600 mb-4">
              <li>Global talent, local expertise</li>
              <li>Culture of innovation and ownership</li>
              <li>Commitment to ethical, responsible AI</li>
              <li>Focus on client success and long-term partnerships</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;