import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";
import Navbar from "@/components/layout/Navbar";
import { whitepapers } from "@/data/whitepapers";
import CustomButton from "@/components/ui/CustomButton";

const WhitepaperDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [showContactForm, setShowContactForm] = useState(false);

    // Find the whitepaper by slug
    const whitepaper = whitepapers.find(wp => wp.slug === slug);

    if (!whitepaper) {
        return (
            <div className="relative min-h-screen bg-white flex flex-col">
                <div className="relative z-20 bg-[#1a1a1a]">
                    <Navbar
                        showContactForm={showContactForm}
                        setShowContactForm={setShowContactForm}
                        logoSize="sm"
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center max-w-md mx-auto px-4">
                        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6">
                            <p className="text-gray-900 font-['DM_Sans'] mb-4">
                                Whitepaper not found
                            </p>
                            <CustomButton
                                onClick={() => navigate("/whitepapers")}
                                variant="primary"
                            >
                                Back to Whitepapers
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-white flex flex-col">
            {/* SEO Meta Tags */}
            <Seo
                title={`${whitepaper.title} | Invictus Data Whitepaper`}
                description={whitepaper.overview}
                canonical={`/whitepapers/${whitepaper.slug}`}
                image={whitepaper.image}
                type="article"
            />

            <div className="relative z-20 bg-[#1a1a1a]">
                <Navbar
                    showContactForm={showContactForm}
                    setShowContactForm={setShowContactForm}
                    logoSize="sm"
                />
            </div>

            {/* Hero Section with Background Image */}
            <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${whitepaper.image})`,
                    }}
                >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full max-w-6xl mx-auto px-6 py-24 flex flex-col justify-end pb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-['Lexend'] leading-tight">
                        {whitepaper.title}
                    </h1>

                    <p className="text-lg text-slate-800 max-w-3xl font-['DM_Sans'] mb-8 leading-relaxed">
                        {whitepaper.overview}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-y-4 gap-x-8 text-slate-600 font-['DM_Sans'] border-t border-slate-200 pt-6 mt-4">
                        <div>
                            <span className="block text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-1">Target Audience</span>
                            <span className="text-sm">{whitepaper.audience}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                {/* Topics/Key Takeaways Box */}
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-12 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-['Lexend'] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2563EB] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        Inside this Whitepaper
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {whitepaper.topics.map((topic, index) => (
                            <li key={index} className="flex items-start text-gray-700 font-['DM_Sans'] text-sm">
                                <span className="text-[#2563EB] mr-2">•</span>
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="prose prose-lg prose-headings:font-['Lexend'] prose-headings:font-bold prose-p:font-['DM_Sans'] prose-p:leading-relaxed text-gray-700 max-w-none">
                    {whitepaper.content}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Lexend']">Ready to dive deeper?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Schedule a consultation with our experts to discuss how these strategies can be applied to your organization.
                    </p>
                    <div className="flex justify-center gap-4">
                        <CustomButton onClick={() => setShowContactForm(true)} variant="primary">
                            Contact Us
                        </CustomButton>
                        <CustomButton onClick={() => navigate('/whitepapers')} variant="secondary" className="border-gray-300">
                            Back to Whitepapers
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhitepaperDetail;
