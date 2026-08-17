import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "../components/layout/Navbar";
import Seo from "@/components/Seo";

const leaders = [
  {
    name: "Nirjar Sanghavi",
    title: "Chief Executive Officer",
    img: "https://assets.channeliq.ai/invictus-landing/Leadership/Nirjar.png",
    alt: "Nirjar Sanghavi photo",
    desc: `Nirjar Sanghavi is a strategic leader with over 20 years of experience driving growth and innovation at the crossroads of data, engineering, and marketing within global technology organizations. As CEO of Invictus Data, he architects the company's strategic roadmap, advancing innovation in AI, data monetization, and platform engineering.\n\nRenowned for his ability to operationalize vision, Nirjar has held senior leadership roles at Samsung, Groupon, eBay, PayPal, and JPMorgan Chase, where he scaled enterprise-grade data ecosystems that accelerated growth and competitive differentiation. His leadership philosophy centers on customer-obsessed innovation, cross-functional synergy, and cultivating high-performance cultures that deliver sustained enterprise value.`
  },
  {
    name: "Ram Duraipandian",
    title: "Chief Technology Officer",
    img: "https://assets.channeliq.ai/invictus-landing/Leadership/Ram.png",
    alt: "Ram Duraipandian photo",
    desc: `Ram Duraipandian is a seasoned technology leader with over 20 years of experience driving innovation at the intersection of engineering, data, and business strategy. As CTO of Invictus Data, he leads the development of scalable, cloud-native platforms and shapes the company's technology vision in AI and digital transformation.\n\nBefore joining Invictus Data, Ram held pivotal leadership roles at Samsung and Groupon, where he was lauded for his ability to harmonize complex technical architectures with strategic objectives, driving measurable improvements in engineering productivity, operational efficiency, and customer experience. A passionate mentor and innovator, Ram cultivates high-performance teams by fostering a culture of continuous learning and collaboration, positioning Invictus Data at the forefront of technological excellence and industry disruption.`
  },
  {
    name: "Sabarish Nathan",
    title: "Chief Operations Officer",
    img: "https://assets.channeliq.ai/invictus-landing/Leadership/Sabrish.jpg",
    alt: "Sabarish Nathan photo",
    desc: `Sabarish Nathan – Chief Operating Officer, INVICTUS DATA with over 20+ years of industry experience, he brings deep expertise in eCommerce operations and supply chain management. As the Chief Operating Officer at INVICTUS DATA, he leads cross-functional execution across delivery, operations, and strategic growth initiatives. His strong domain knowledge, combined with a hands-on leadership style, helps drive operational excellence and client success across all verticals.`
  },
  {
    name: "Khushal Jain",
    title: "Head of India Operations",
    img: "https://assets.channeliq.ai/invictus-landing/Leadership/Kushal.jpg",
    alt: "Khushal Jain photo",
    desc: `Khushal Jain – Head of India Operations with over 15 years of experience, he leads India Operations at INVICTUS DATA, driving data engineering initiatives that power scalable, high-performance solutions. His expertise in Big Data, ETL optimization, and data warehousing enables smarter decision-making through efficient, business-aligned data systems.`
  },
  {
    name: "Imay Selvan Ramkrishnan",
    title: "Head of Engineering",
    img: "https://assets.channeliq.ai/invictus-landing/Leadership/Imay.png",
    alt: "Imay Selvan Ramkrishnan photo",
    desc: `As Head of Engineering at INVICTUS DATA, Imay Selvan Ramkrishnan brings over 14 years of expertise in software engineering and architectural leadership. He leads the design and delivery of scalable, distributed systems, driving innovation and technical excellence across teams. Imay is passionate about building high-performing engineering cultures through a focus on code quality, strategic empowerment, and alignment with business objectives, delivering resilient, future-ready technology solutions.`
  },
  {
    name: "Om Rathod",
    title: "Head of GTM",
    img: "https://assets.channeliq.ai/invictus-landing/Leadership/om.jpg",
    alt: "Om Rathod photo",
    desc: `Om is a growth-focused GTM leader on a mission to help brands scale profitably in the world of eCommerce. At Invictus Data, he's driving global go-to-market strategy across Amazon, Shopify, and beyond by blending AI, data, and real-world retail expertise. With a background in scaling SaaS businesses and building high-impact revenue engines, Om thrives at the intersection of strategy, speed, and execution.`
  },
  {
    name: "Harika K",
    title: "Head of HR",
    img: "https://assets.channeliq.ai/invictus-landing/Leadership/Harika.png",
    alt: "Harika K photo",
    desc: `Harika leads the Human Resources function at INVICTUS DATA, bringing over 10 years of experience across organizations with 1,000+ employees in diverse industries. She has a proven track record in talent acquisition, employee engagement, and organizational development. Harika excels at crafting and implementing HR strategies that align with business goals, foster a productive and high-performance culture, and support scalable, long-term growth. Her people-first approach and commitment to building strong, resilient teams play a vital role in driving the company's success through effective and strategic people management.`
  },
  {
    name: "Arun Rangachary",
    title: "Head of Customer Success",
    img: "https://assets.channeliq.ai/invictus-landing/Leadership/Arun.png",
    alt: "Arun Rangachary photo",
    desc: `Arun Rangachary leads the Customer Success function at INVICTUS DATA, leveraging over 16 years of industry experience to drive customer satisfaction and business growth. He excels at building strategic partnerships, aligning customer goals with innovative solutions, and ensuring seamless onboarding and adoption. Arun's data-driven approach to customer engagement has consistently improved retention rates and expanded account value. His leadership fosters a customer-centric culture that prioritizes proactive support and long-term success.`
  }
];

const LeadershipTeam: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <Seo 
        title="Leadership Team | Invictus Data"
        description="Meet the leadership team driving innovation in AI and data engineering at Invictus Data. Experienced leaders in technology and business."
        keywords="leadership team, executive team, AI leaders, data engineering leadership, technology executives"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-16 px-5">
        <div className="flex flex-col items-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 mt-24 unbounded text-center">Leadership Team</h1>
          <h2 className="text-2xl md:text-3xl text-[#2563EB] font-semibold mb-6 unbounded text-center">Vision. Expertise. Execution.</h2>
          <p className="text-xl text-slate-700 mb-16 max-w-4xl text-center">
            At Invictus Data, our leadership combines deep industry knowledge with a relentless drive for innovation - guiding high-impact teams at every level.
          </p>
          
          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            {leaders.slice(0, 6).map((leader, index) => (
              <div key={leader.name} className="group relative">
                <div className="bg-white border border-[#2563EB]/30 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 h-[300px] flex flex-col relative overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={leader.img}
                    alt={leader.alt}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 unbounded">{leader.name}</h3>
                    <h4 className="text-sm text-[#2563EB] font-semibold">{leader.title}</h4>
                  </div>
                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end z-20">
                    <div className="text-center mb-2 flex-shrink-0">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 unbounded">{leader.name}</h3>
                      <h4 className="text-sm text-[#2563EB] font-semibold">{leader.title}</h4>
                    </div>
                    <div className="max-h-32 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#2563EB transparent' }}>
                      <p className="text-xs text-slate-700 leading-relaxed text-left">{leader.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Center last two cards */}
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full max-w-3xl mx-auto mt-6">
            {leaders.slice(6).map((leader, index) => (
              <div key={leader.name} className="group relative w-full max-w-sm">
                <div className="bg-white border border-[#2563EB]/30 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 h-[300px] flex flex-col relative overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={leader.img}
                    alt={leader.alt}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 unbounded">{leader.name}</h3>
                    <h4 className="text-sm text-[#2563EB] font-semibold">{leader.title}</h4>
                  </div>
                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end z-20">
                    <div className="text-center mb-2 flex-shrink-0">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 unbounded">{leader.name}</h3>
                      <h4 className="text-sm text-[#2563EB] font-semibold">{leader.title}</h4>
                    </div>
                    <div className="max-h-32 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#2563EB transparent' }}>
                      <p className="text-xs text-slate-700 leading-relaxed text-left">{leader.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default LeadershipTeam; 