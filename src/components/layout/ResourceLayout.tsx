import React from "react";
import Navbar from "../layout/Navbar";

interface ResourceLayoutProps {
  children: React.ReactNode;
}

const ResourceLayout: React.FC<ResourceLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#EFF6FF]">
      <Navbar />
      <main className="pt-24 max-w-5xl mx-auto px-4 w-full text-slate-900">{children}</main>
    </div>
  );
};

export default ResourceLayout; 