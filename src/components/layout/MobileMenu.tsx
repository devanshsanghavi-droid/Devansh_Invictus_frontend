import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { navigationData } from "@/data/navigationData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import invictusLogoLight from "@/assets/invictuslogo-light.png";

// TODO: replace with the real booking URL (Calendly etc.)
const SCHEDULE_WORKSHOP_URL = "#";
const SIGN_IN_URL = "https://app.trivas.ai";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const getIcon = (iconName: string) => {
  // data files use kebab-case names; lucide exports PascalCase components
  const pascal = iconName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  const IconComponent = Icons[
    pascal as keyof typeof Icons
  ] as React.ComponentType<any>;
  return IconComponent || Icons.Circle;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const navigationItems: Array<{
    key: keyof typeof navigationData;
    label: string;
    directLink?: string;
  }> = [
      { key: "solutions", label: "Solutions" },
      { key: "products", label: "Products" },
      { key: "industries", label: "Industries" },
      { key: "resources", label: "Resources" },
      { key: "about", label: "About" },
      { key: "careers", label: "Careers" },
    ];

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto border-l border-slate-200">
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200">
            <Link to="/" onClick={onClose} className="flex items-center">
              <img
                src={invictusLogoLight}
                alt="Invictus Data"
                className="h-9 w-auto object-contain object-left"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <Icons.X className="w-6 h-6 text-slate-900" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1">
            {navigationItems.map(({ key, label, directLink }) => {
              const data = navigationData[key];
              const isOpen = openSections.includes(key);

              if (!data) return null;

              // Handle direct links (like About)
              if (directLink) {
                return (
                  <Link
                    key={key}
                    to={directLink}
                    onClick={onClose}
                    className="flex items-center justify-between w-full p-4 text-left text-slate-900 font-medium text-lg hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    {label}
                    <Icons.ExternalLink className="w-5 h-5 text-slate-400" />
                  </Link>
                );
              }

              return (
                <Collapsible
                  key={key}
                  open={isOpen}
                  onOpenChange={() => toggleSection(key)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left text-slate-900 font-medium text-lg hover:bg-slate-100 rounded-lg transition-colors">
                    <span>{label}</span>
                    <Icons.ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-4 pb-2">
                    {/* Products: overview page, then external app links */}
                    {key === "products" && "items" in data && (
                      <div className="space-y-1">
                        <Link
                          to="/products"
                          onClick={onClose}
                          className="block py-3 px-3 text-sm font-semibold text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-colors"
                        >
                          View all products
                        </Link>
                        {(data.items as any[]).map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className="block py-3 px-3 text-sm text-slate-600 hover:text-[#1E40AF] hover:bg-[#EFF6FF] rounded-lg transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-900">
                                {item.name}
                                <span className="ml-2 font-normal text-[#2563EB]">
                                  {item.tagline}
                                </span>
                              </span>
                              <Icons.ArrowUpRight className="w-4 h-4 text-slate-400" />
                            </div>
                            {item.description && (
                              <p className="text-xs text-slate-500 mt-1">
                                {item.description}
                              </p>
                            )}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Handle sections with subsections (like solutions, industries) */}
                    {data && "sections" in data && (
                      <div className="space-y-3">
                        {data.sections.map((section, idx) => {
                          const SectionIcon = getIcon(section.icon);
                          return (
                            <div key={idx} className="space-y-2">
                              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800 py-2 px-3 bg-slate-50 rounded-lg border border-slate-200">
                                <SectionIcon className="w-4 h-4 text-[#2563EB]" />
                                {section.title}
                              </div>
                              <div className="pl-4 space-y-1">
                                {section.items.map((item, itemIdx) => (
                                  <Link
                                    key={itemIdx}
                                    to={item.href || "#"}
                                    onClick={onClose}
                                    className="block py-3 px-3 text-sm text-slate-600 hover:text-[#1E40AF] hover:bg-[#EFF6FF] rounded-lg transition-colors"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span>{item.name}</span>
                                      <Icons.ArrowRight className="w-4 h-4 text-slate-300" />
                                    </div>
                                    {item.description && (
                                      <p className="text-xs text-slate-400 mt-1">
                                        {item.description}
                                      </p>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Handle simple items (like resources, about, careers) */}
                    {key !== "products" && data && "items" in data && (
                      <div className="space-y-1">
                        {data.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href || "#"}
                            onClick={onClose}
                            className="block py-3 px-3 text-sm text-slate-600 hover:text-[#1E40AF] hover:bg-[#EFF6FF] rounded-lg transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.name}</span>
                              <Icons.ArrowRight className="w-4 h-4 text-slate-300" />
                            </div>
                            {item.description && (
                              <p className="text-xs text-slate-400 mt-1">
                                {item.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
            <a
              href={SCHEDULE_WORKSHOP_URL}
              onClick={onClose}
              className="flex items-center justify-center w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg px-6 py-3 font-semibold text-base transition-colors duration-200 gap-2"
            >
              Schedule a Workshop
              <Icons.ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={SIGN_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center w-full bg-transparent border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg px-6 py-3 font-semibold text-base transition-colors duration-200"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
