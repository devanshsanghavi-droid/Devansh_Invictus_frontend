import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    question: "Why is Invictus Data a great place to start or grow my career?",
    answer: `Invictus Data offers more than a job - it's a launchpad for growth. Whether you're an intern, a recent grad, or a senior engineer, you'll have access to:

• Global exposure across industries and functions
• Continuous learning through structured training and mentorship  
• Work that evolves with tech trends (AI, cloud, data, and more)

We're also consistently recognized as a Great Place to Work, with awards for our culture, ethics, and sustainability efforts.`
  },
  {
    question: "What is a typical workday like?",
    answer: `There's no one-size-fits-all day at Invictus Data - and that's a good thing. Depending on your role, you might be:

• Pair programming or collaborating on cloud deployments
• Participating in daily standups or client sprint reviews
• Working asynchronously with global teammates

No matter your task, you'll be helping shape meaningful, real-world outcomes.`
  },
  {
    question: "What is the work environment like?",
    answer: `Our environment is built on support, curiosity, and collaboration. You'll work alongside some of the smartest, most generous people in tech, in a culture that values:

• Team-first execution
• Transparent communication
• Flexible workspaces (on-site or remote) designed for innovation and continuous learning`
  },
  {
    question: "What career growth opportunities are available?",
    answer: `At Invictus Data, we believe in nurturing talent and providing clear paths for advancement. We offer:

• Mentorship programs with senior leaders
• Regular skill development workshops and training
• Cross-functional project opportunities
• Leadership development programs
• Conference attendance and certification support`
  },
  {
    question: "What benefits and perks do you offer?",
    answer: `We provide comprehensive benefits designed to support your well-being and professional growth:

• Competitive salary and equity packages
• Health, dental, and vision insurance
• Flexible PTO and remote work options
• Professional development budget
• State-of-the-art equipment and tools
• Team events and company retreats`
  },
  {
    question: "How do I apply and what's the interview process like?",
    answer: `Our hiring process is designed to be thorough yet respectful of your time:

• Submit your application through our careers page
• Initial screening call with our recruiting team
• Technical assessment or case study (role-dependent)
• Panel interviews with team members and leadership
• Final interview and offer discussion

We typically complete the process within 2-3 weeks and provide feedback at each stage.`
  }
];

const FAQ: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([0]); // First item expanded by default
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqData.length);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-24 px-5">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center unbounded">
            Frequently Asked Questions
        </h1>
          <p className="text-xl text-slate-700 mb-12 text-center">
            Your most-asked questions - answered. Thinking about starting your journey at Invictus Data? Here are some of the things future team members ask us most.
          </p>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-[#2563EB]/20 rounded-2xl overflow-hidden shadow-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#EFF6FF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                >
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 unbounded pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out">
                    {expandedItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-slate-900" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-900" />
                    )}
                  </div>
                </button>
                
                <div
                  ref={el => contentRefs.current[index] = el}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-[#2563EB]/10">
                    <div className="pt-4 transform transition-transform duration-300 ease-in-out">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 unbounded">Still have questions?</h2>
            <p className="text-lg text-slate-700 mb-6">
              Reach out at <a href="mailto:careers@invictusdata.ai" className="text-[#2563EB] underline hover:text-[#2563EB]/80">careers@invictusdata.ai</a> or explore our career programs to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 