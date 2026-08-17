import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Users } from "lucide-react";
import Seo from "@/components/Seo";

const CXTBD: React.FC = () => (
  <>
    <Seo
      title="Customer Experience Solutions | Invictus Data"
      description="Enhance customer experience with AI-powered personalization, analytics, and engagement solutions."
      keywords="customer experience, CX solutions, personalization, customer analytics, engagement, customer journey"
    />
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend']">CX Customer Experience</h1>
          </div>
          <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-8 mt-6">
            <p className="text-lg md:text-xl text-slate-700 font-['DM_Sans'] leading-relaxed">
              Customer Experience solution details coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CXTBD; 
