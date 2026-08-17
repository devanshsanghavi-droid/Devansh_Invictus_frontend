import React from "react";
import Navbar from "../components/layout/Navbar";
import Seo from "@/components/Seo";

const OurStory: React.FC = () => {
  return (
    <>
      <Seo
        title="Our Story | Invictus Data"
        description="Discover the journey of Invictus Data and our commitment to delivering exceptional AI and data engineering solutions that transform businesses."
        keywords="invictus data story, company history, AI innovation, data engineering journey, technology leadership"
      />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-3xl font-bold mb-6 text-slate-900 mt-24">Our Story</h1>
        <p className="text-slate-700 max-w-2xl text-center">
          Invictus was founded with a vision to empower businesses through technology and innovation. Our journey began with a small team of passionate individuals and has grown into a global organization dedicated to delivering excellence.
        </p>
      </div>
    </>
  );
};

export default OurStory; 