import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const locations = [
  { label: "India - Chennai", value: "chennai" },
  { label: "India - Bangalore", value: "bengaluru" },
  { label: "United States", value: "usa" },
];
const domains = [
  { label: "Data", value: "data" },
  { label: "Engineering", value: "engineering" },
  { label: "HR", value: "hr" },
  { label: "Operations", value: "operations" },
];
const roles = {
  chennai: {
    data: ["Data Engineer"],
    engineering: ["Full Stack Developer", "Node.js Developer", "SAP Hybris Developer", "Frontend Developer"],
    hr: ["Recruiter"],
    operations: [],
  },
  bengaluru: {
    data: [],
    engineering: ["Senior Backend Developer", "Senior Web Developer", "QA Manual Engineer"],
    hr: [],
    operations: ["Senior SDET"],
  },
  usa: {
    data: [],
    engineering: ["Senior Business Analyst"],
    hr: [],
    operations: [],
  },
};

const Careers: React.FC = () => {
  const [location, setLocation] = useState("chennai");
  const [domain, setDomain] = useState("engineering");
  const currentRoles = roles[location][domain];
  const navigate = useNavigate();
  const toUrl = (role: string) =>
    "/careers/role/" + role.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <>
      <Seo 
        title="Careers | Join Invictus Data"
        description="Join our team of AI and data engineering experts. Explore career opportunities at Invictus Data and grow with us in cutting-edge technology."
        keywords="careers invictus data, AI jobs, data engineering careers, technology jobs, software engineering careers, join our team"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} logoSize="sm" />
      </div>
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-24 px-6 ">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend']">Open Roles</h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-[#2563EB] font-semibold mb-6 font-['Lexend']">We're Hiring Across Geographies and Teams</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              Join our global mission to solve complex business problems with cutting-edge Data & AI solutions. We're actively hiring for roles across engineering, data, and product — in India and the US.
            </p>
            
          </div>
        </section>

        {/* Open Roles Section (Updated Table) */}
        <section id="roles" className="w-full flex flex-col items-center justify-center py-0 px-6 max-w-7xl mx-auto">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="bg-white border border-slate-200 rounded-2xl p-10 w-full max-w-5xl flex flex-col items-center shadow-lg">
              <div className="overflow-x-auto w-full">
                <table className="min-w-full text-left text-slate-700 border-collapse">
                  <thead>
                    <tr className="bg-[#EFF6FF] text-[#1E40AF]">
                      <th className="px-4 py-3 font-bold">Job Code</th>
                      <th className="px-4 py-3 font-bold">Job Role</th>
                      <th className="px-4 py-3 font-bold">Openings</th>
                      <th className="px-4 py-3 font-bold">Job Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#222]"><td className="px-4 py-3">BLR - INV101</td><td className="px-4 py-3">Frontend Developer Engineer</td><td className="px-4 py-3">3 (Exp: 4+ Years)</td><td className="px-4 py-3">Frontend Developer skilled in React.js, JavaScript (ES6+), TypeScript, HTML5, and CSS3 to create scalable, responsive web applications. Must have hands-on experience with Redux, RESTful APIs, Webpack, Babel, and cross-browser compatibility. Familiarity with UI/UX best practices, performance optimization, Git workflows, and testing tools like Jest or React Testing Library is essential.</td></tr>
                    <tr className="border-b border-[#222]"><td className="px-4 py-3">BLR - INV102</td><td className="px-4 py-3">Backend Developer Engineer</td><td className="px-4 py-3">4 (Exp: 4+ Years)</td><td className="px-4 py-3">Backend Developer with strong expertise in Node.js, Express.js, and RESTful API development to build and maintain robust server-side applications. Proficiency in JavaScript/TypeScript, database design (PostgreSQL, MongoDB), and cloud services like AWS (EC2, S3, RDS, Lambda) is required. Experience with Docker, Kubernetes, CI/CD pipelines, authentication (OAuth/JWT), and performance tuning is a plus.</td></tr>
                    <tr className="border-b border-[#222]"><td className="px-4 py-3">BLR - INV107</td><td className="px-4 py-3">AI Implementation Engineer</td><td className="px-4 py-3">1 (Exp: 4+ Years)</td><td className="px-4 py-3">AI Implementation Engineer with strong backend development skills to integrate and deploy AI/ML models in production systems. Must be proficient in Python, Node.js, RESTful APIs, and working with LLMs, RAG pipelines, and vector databases (e.g., FAISS, Pinecone). Experience with AWS, Docker, Kubernetes, and building scalable, data-driven applications is essential.</td></tr>
                    <tr className="border-b border-[#222]"><td className="px-4 py-3">BLR - INV105</td><td className="px-4 py-3">Product Lead</td><td className="px-4 py-3">1 (Exp: 7+ Years)</td><td className="px-4 py-3">Product Lead to drive strategy, roadmap, and execution for innovative, user-focused digital products. You'll collaborate cross-functionally with design, engineering, and business teams to deliver scalable and impactful solutions. Strong skills in product lifecycle management, data-driven decision making, Agile methodologies, and tools like Jira, Figma, and analytics platforms are essential.</td></tr>
                    <tr><td className="px-4 py-3">BLR - INV106</td><td className="px-4 py-3">QA Engineering</td><td className="px-4 py-3">1 (Exp: 3+ Years)</td><td className="px-4 py-3">Hiring a QA Manual Engineer with hands-on experience in SAP testing to ensure quality across modules like SAP FICO, MM, SD, or HCM. Responsibilities include writing and executing test cases, defect tracking, and collaborating with functional teams to validate business processes. Strong knowledge of STLC, test documentation, and tools like HP ALM, JIRA, or TestRail is required.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="w-full py-20 px-6  relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Join Our Mission</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">We're building a global team to solve the world's toughest data and AI challenges. Ready to make an impact?</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
              <a href="/contact" className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300">Contact Talent Team</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default Careers; 