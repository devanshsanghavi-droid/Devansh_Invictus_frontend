import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import ContactForm from "@/components/forms/ContactForm";
import invictusLogoLight from "@/assets/invictuslogo-light.png";
import { ArrowUpRight } from "lucide-react";
import { NavigationDropdown } from "./NavigationDropdown";
import { navigationData } from "@/data/navigationData";

// TODO: replace with the real booking URL (Calendly etc.)
export const SCHEDULE_WORKSHOP_URL = "#";
export const SIGN_IN_URL = "https://app.trivas.ai";

interface NavbarProps {
  showContactForm?: boolean;
  setShowContactForm?: (show: boolean) => void;
  logoSize?: "sm" | "md" | "lg";
}

export const Navbar: React.FC<NavbarProps> = ({
  showContactForm = false,
  setShowContactForm,
  logoSize = "md",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const dropdownHideTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: "Solutions", key: "solutions" },
    { label: "Products", key: "products" },
    { label: "Industries", key: "industries" },
    { label: "Resources", key: "resources" },
    { label: "About", key: "about", to: "/about" },
    { label: "Careers", key: "careers" },
  ];

  const isActive = (to: string) => {
    if (to === "/" && location.pathname === "/") return true;
    if (to !== "/" && location.pathname.startsWith(to)) return true;
    return false;
  };

  const [activeDropdown, setActiveDropdown] = useState<
    keyof typeof navigationData | null
  >(null);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center px-6 lg:px-10 py-3 box-border
        bg-white border-b border-slate-200
        ${showContactForm
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
          }`}
      >
        <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center select-none z-50">
            <img
              src={invictusLogoLight}
              alt="Invictus Data"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain object-left"
            />
          </Link>

          {/* Center Nav Links with Dropdowns - Desktop Only */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center relative">
              {navItems.map((item) => {
                const linkClasses = `px-4 py-2 text-[15px] font-medium transition-colors duration-150
                  ${isActive("/" + item.key)
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                  }`;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (dropdownHideTimeout.current) {
                        clearTimeout(dropdownHideTimeout.current);
                        dropdownHideTimeout.current = null;
                      }
                      setActiveDropdown(
                        item.key as keyof typeof navigationData
                      );
                    }}
                    onMouseLeave={() => {
                      dropdownHideTimeout.current = setTimeout(() => {
                        setActiveDropdown(null);
                      }, 250);
                    }}
                  >
                    <Link to={item.to || `/${item.key}`} className={linkClasses}>
                      {item.label}
                    </Link>
                    {activeDropdown === item.key && (
                      <NavigationDropdown
                        section={item.key as keyof typeof navigationData}
                        onClose={() => setActiveDropdown(null)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTAs - Desktop Only */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={SIGN_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150"
            >
              Sign In
            </a>
            <a
              href={SCHEDULE_WORKSHOP_URL}
              className="flex items-center bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-sm px-5 py-2.5 font-medium text-[15px] transition-colors duration-150 gap-1.5"
            >
              Schedule a Workshop <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-900"
            >
              {isMobileMenuOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {showContactForm && <ContactForm />}
    </>
  );
};

export default Navbar;
