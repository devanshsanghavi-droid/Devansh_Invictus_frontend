import React from "react";
import ResourceLayout from "@/components/layout/ResourceLayout";

const leaders = [
  {
    name: "Nirjar Sanghavi",
    title: "Chief Executive Officer",
    img: "/lovable-uploads/leader1.png",
    alt: "Nirjar Sanghavi photo",
    desc: `Nirjar has held executive roles in Data, Engineering, and Marketing for 20+ years across global tech companies.He led multiple initiatives at Samsung Electronics America such as building their data platform from the ground up and scaling their eCommerce business. He’s also built and led Data, CRM, and Marketing platforms globally for Groupon. Nirjar has strong technical knowledge and industry-leading expertise in Data Science, Analytics, CRM, and has been an influential leader at eBay, PayPal, and Chase in the past.`
  },
  {
    name: "Rafael Herrera",
    title: "Chief Technology Officer",
    img: "/lovable-uploads/leader2.png",
    alt: "Rafael Herrera photo",
    desc: `Rafael has served as Chief Data Officer in multiple companies like AUTO Group Berlin.He previously held roles as Head of Business Intelligence at CityDeal and Groupon. Over 15 years he has led major companies in modernization, vision, and scalable platform architecture. Rafael holds a Diploma in Business Administration and Information Systems from AKAD University Stuttgart.`
  },
  {
    name: "Mikin Shah",
    title: "Chief People Officer",
    img: "/lovable-uploads/leader3.png",
    alt: "Mikin Shah photo",
    desc: `Mikin has more than 15 years of experience in diverse domains such as Human Resources, Education, and Technology.He has been an entrepreneur who has founded and successfully run businesses in recruitment and training. With a strong focus on people and culture, Mikin also has a strong track record in scaling fast-growth tech teams. He has helped build strong teams in many large companies such as ICICI Bank, HDFC Bank, and others.`
  }
];

const LeadershipTeamReplica: React.FC = () => (
  <ResourceLayout>
    {/* Hero Section */}
    <section className="w-full flex flex-col items-center justify-center py-24 px-6 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-3xl">🧑‍💼</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend']">Leadership Team (Replica)</h1>
        </div>
        <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Vision. Expertise. Execution.</h2>
        <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
          At Invictus, our leadership combines deep industry knowledge with a relentless drive for innovation - guiding high-impact teams at every level.
        </p>
      </div>
    </section>

    {/* Leadership Grid */}
    <section className="w-full py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-16">
        {leaders.map((leader, i) => (
          <div
            key={leader.name}
            className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-12 bg-white border border-slate-200 rounded-2xl shadow-2xl p-8 md:p-16`}
          >
            <img
              src={leader.img}
              alt={leader.alt}
              className="w-56 h-56 object-cover rounded-2xl shadow-lg border-4 border-slate-200 bg-slate-100"
              aria-label={leader.alt}
            />
            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-['Lexend']">{leader.name}</h3>
              <h4 className="text-lg md:text-xl text-[#3b82f6] font-semibold mb-4 font-['Lexend']">{leader.title}</h4>
              <p className="text-base md:text-lg text-slate-700 font-['DM_Sans'] whitespace-pre-line leading-relaxed text-left md:text-justify">{leader.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </ResourceLayout>
);

export default LeadershipTeamReplica; 