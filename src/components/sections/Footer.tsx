import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin } from "lucide-react";
import { navigationData } from "@/data/navigationData";

const menuLinks = [
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
];

export const Footer: React.FC = () => {
  // Extract solutions sections and items from navigationData
  const solutionSections = navigationData.solutions.sections;

  return (
    <footer className="w-full bg-[#0B1220] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 py-16 border-b border-white/10">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold mb-4">Invictus Data &amp; AI</h2>
            <p className="text-[15px] leading-relaxed text-slate-400 max-w-md">
              Empowering businesses with data-driven intelligence. From cloud
              migration to AI integration, delivered by industry experts across
              Chennai, San Francisco, Bangalore, and Hyderabad.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow !text-slate-500 mb-4">Contact</p>
            <ul className="space-y-2 text-[15px] text-slate-300">
              <li>
                <a
                  href="mailto:info@invictusdata.ai"
                  className="hover:text-white transition-colors duration-150"
                >
                  info@invictusdata.ai
                </a>
              </li>
              <li className="text-slate-400">Los Altos, CA, USA</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow !text-slate-500 mb-4">Newsletter</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="name@email.com"
                className="flex-1 px-4 py-2.5 bg-transparent text-white text-[15px] placeholder:text-slate-500
                           border border-white/20 rounded-sm focus:outline-none focus:border-[#2563EB] transition-colors duration-150"
              />
              <button
                type="submit"
                className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-5 py-2.5 text-[15px] font-medium
                           rounded-sm transition-colors duration-150 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Directory */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 py-16 border-b border-white/10">
          <div>
            <p className="eyebrow !text-slate-500 mb-4">Menu</p>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-slate-300 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {solutionSections.map((section, i) => (
            <div key={i}>
              <p className="eyebrow !text-slate-500 mb-4">{section.title}</p>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <Link
                      to={item.href}
                      className="text-[15px] text-slate-300 hover:text-white transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Colophon */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Invictus Data. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://x.com/InvictusDataAI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Invictus Data on X"
              className="text-slate-400 hover:text-white transition-colors duration-150"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/invictus-data/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Invictus Data on LinkedIn"
              className="text-slate-400 hover:text-white transition-colors duration-150"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
