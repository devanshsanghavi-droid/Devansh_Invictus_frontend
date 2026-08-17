
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

interface LightLayoutProps {
  children: React.ReactNode;
}

export const LightLayout: React.FC<LightLayoutProps> = ({ children }) => {
  return (
      <div className="w-full min-h-screen bg-white text-slate-900 relative">
        <div className="flex flex-col items-center relative z-10">
          <div className="w-full max-w-[1920px] relative">
            <div className="flex flex-col items-center">
              <div className="w-full">
                <Navbar />
              </div>
              
              {children}
              
              <Footer />
            </div>
          </div>
        </div>
      </div>
  );
};

export default LightLayout;
