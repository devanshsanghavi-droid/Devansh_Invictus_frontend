import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import React from "react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const LifeAtInvictus: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  
  const officeImages = [
    "https://assets.channeliq.ai/invictus-landing/Office/Prithvi.jpg",
    "https://assets.channeliq.ai/invictus-landing/Office/channei.jpg",
    "https://assets.channeliq.ai/invictus-landing/Office/atlantis.jpg",
    "https://assets.channeliq.ai/invictus-landing/Office/DSCF8889.png",
    "https://assets.channeliq.ai/invictus-landing/Office/DSCF9100.png",
    "https://assets.channeliq.ai/invictus-landing/Office/DSCF9116.png",
  
  ];

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Seo 
        title="Life at Invictus | Invictus Data"
        description="Discover what it is like to work at Invictus Data. Learn about our culture, values, and commitment to employee growth and innovation."
        keywords="company culture, work life balance, employee benefits, tech culture, innovation culture, team collaboration"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} logoSize="sm" />
      </div>
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 flex items-center gap-3 unbounded">
          <span role="img" aria-label="briefcase"></span> Life at Invictus Data
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#2563EB] font-semibold mb-6 unbounded">Here, Anything Is Possible</h2>
        <p className="text-lg text-slate-700 mb-8 font-['DM_Sans']">At Invictus Data, your work has reach, your ideas have power, and your purpose has a place.<br />We're a team driven by impact - solving complex problems for global clients while building a better, more connected world.</p>

        {/* Life at Our Offices Collage */}
        <section className="mb-10 bg-transparent">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {officeImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image}
                  alt={`Office life ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 mt-8 font-['DM_Sans']"
          >
            From collaborative workspaces to innovation hubs, our offices are designed to foster creativity, productivity, and team collaboration across the globe.
          </motion.p>
        </section>

        <section className="mb-10 bg-white border border-[#2563EB]/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[#2563EB] mb-2 flex items-center gap-2 unbounded"><span role="img" aria-label="globe"></span> Work with Reach</h3>
          <p className="text-slate-700 mb-4">At Invictus Data, every project stretches your perspective and sharpens your skills.<br />Whether you’re deploying scalable AI platforms, building cloud-native apps, or optimizing data systems - your work creates real-world outcomes that matter.</p>
          <blockquote className="italic text-slate-400 border-l-4 border-[#2563EB] pl-4 mb-4">“Here, your code doesn’t just compile. It shapes retail, finance, healthcare, and logistics ecosystems around the world.”</blockquote>
        </section>

        <section className="mb-10 bg-white border border-[#2563EB]/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[#2563EB] mb-2 flex items-center gap-2 unbounded"><span role="img" aria-label="target"></span> Work with Purpose</h3>
          <p className="text-slate-700 mb-4">We believe innovation must be paired with intention.<br />From ethical engineering to empowering underserved communities, our work is rooted in the belief that tech should be a force for good - for people, businesses, and the planet.</p>
        </section>

        <section className="mb-10 bg-white border border-[#2563EB]/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[#2563EB] mb-2 flex items-center gap-2 unbounded"><span role="img" aria-label="seedling"></span> Our Commitments</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#2563EB] mb-1 flex items-center gap-2"><span role="img" aria-label="recycle"></span> Sustainability</h4>
            <p className="text-slate-700 mb-2">We embed sustainability across every layer of our operations and client solutions.<br />From energy-efficient cloud architectures to zero-waste workplace policies, we help shape a more resilient, environmentally responsible future.</p>
            <ul className="list-disc list-inside text-slate-600 mb-4">
              <li>Green cloud infrastructure & serverless computing</li>
              <li>Ethical sourcing and vendor alignment</li>
              <li>Community-led initiatives in India & the US</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#2563EB] mb-1 flex items-center gap-2"><span role="img" aria-label="globe"></span> Inclusion & Diversity</h4>
            <p className="text-slate-700 mb-2">We’re stronger when we reflect the world we serve.<br />Invictus Data is committed to building diverse teams - across gender, race, geography, neurodiversity, and more - because the best ideas come from different perspectives.</p>
            <ul className="list-disc list-inside text-slate-600 mb-4">
              <li>Cognitive diversity is non-negotiable</li>
              <li>Safe, inclusive spaces for every identity</li>
              <li>Global hiring and remote-first flexibility</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[#2563EB] mb-1 flex items-center gap-2"><span role="img" aria-label="robot"></span> Responsible AI</h4>
            <p className="text-slate-700 mb-2">AI should be powerful - but also ethical, safe, and explainable.<br />We guide clients to build and deploy Responsible AI with transparency, fairness, and trust at the core.</p>
            <ul className="list-disc list-inside text-slate-600 mb-4">
              <li>Bias testing and guardrails for LLMs</li>
              <li>Human-in-the-loop oversight</li>
              <li>Clear audit trails and ethical usage policies</li>
            </ul>
          </div>
        </section>

        <section className="mb-10 bg-white border border-[#2563EB]/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-[#2563EB] mb-2 flex items-center gap-2 unbounded"><span role="img" aria-label="rocket"></span> Ready to Do Work That Matters?</h3>
          <p className="text-slate-700 mb-6">Join Invictus Data and bring your talent to the table - where your impact echoes globally.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/careers" className="bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300 text-center">Explore Careers</a>          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-slate-900 hover:text-gray-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Office life full view"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
    </>

  );
};

export default LifeAtInvictus; 
