import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Seo from "@/components/Seo";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Seo
        title="404 - Page Not Found | Invictus Data"
        description="The page you're looking for doesn't exist."
      />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <div className="w-full min-h-screen bg-white overflow-hidden relative flex items-center justify-center">
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-white to-[#EFF6FF]" />
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center p-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl text-slate-900">🚫</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend']">404</h1>
          </div>
          <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Oops! Page not found</p>
          <a href="/" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300">Return to Home</a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
