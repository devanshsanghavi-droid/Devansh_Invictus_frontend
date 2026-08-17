import React, { useRef } from "react";
import * as Icons from "lucide-react";
import { navigationData } from "@/data/navigationData";
import { Link } from "react-router-dom";

interface NavigationDropdownProps {
  section: keyof typeof navigationData;
  onClose?: () => void;
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

const panelClasses =
  "bg-white shadow-xl shadow-slate-900/10 rounded-2xl border border-slate-200 transition-all duration-300 ease-out animate-dropdown-enter py-8";

export const NavigationDropdown: React.FC<NavigationDropdownProps> = ({
  section,
  onClose,
}) => {
  const data = navigationData[section];
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dropdown content
  let dropdownContent = null;
  if (section === "products" && "items" in data) {
    // Product showcase: one subheader, three product cards linking out to the apps
    dropdownContent = (
      <div
        ref={dropdownRef}
        className="fixed left-1/2 top-[76px] z-50 w-full max-w-[1100px] px-4 md:px-8 -translate-x-1/2"
        style={{ pointerEvents: "auto" }}
      >
        <div className={`${panelClasses} px-6 sm:px-10`}>
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Products</h3>
              <p className="text-sm text-slate-500 mt-1">
                Software built and run by Invictus Data
              </p>
            </div>
            <Link
              to="/products"
              onClick={() => onClose?.()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:text-[#1E40AF] transition-colors duration-150 shrink-0 mt-1"
            >
              View all products
              <Icons.ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.items.map((item: any, idx: number) => {
              const Icon = getIcon(item.icon);
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onClose?.()}
                  className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 hover:border-[#2563EB]/40 hover:bg-[#EFF6FF]/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </span>
                    <Icons.ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#2563EB] transition-colors duration-200" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-slate-900 font-['Lexend']">
                      {item.name}
                    </div>
                    <div className="text-xs font-medium text-[#2563EB] font-['DM_Sans'] mt-0.5">
                      {item.tagline}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 font-['DM_Sans'] leading-snug">
                    {item.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (section === "industries" && "sections" in data) {
    // Flatten all items into a single array
    const allIndustryItems = data.sections.map((group) => ({
      ...group.items[0],
      groupTitle: group.title,
      groupIcon: group.icon,
    }));
    dropdownContent = (
      <div
        ref={dropdownRef}
        className="fixed left-1/2 top-[76px] z-50 w-full max-w-[1920px] px-4 md:px-8 -translate-x-1/2"
        style={{ pointerEvents: "auto" }}
      >
        <div className={`${panelClasses} max-w-md mx-auto px-6 sm:px-10`}>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900 font-['Lexend']">
              Industries
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {allIndustryItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.href || "#"}
                onClick={() => {
                  if (onClose) onClose();
                }}
                className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#EFF6FF] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <span className="text-base font-medium text-slate-700 group-hover:text-[#1E40AF] transition-colors font-['DM_Sans'] leading-tight">
                  {item.groupTitle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (section === "solutions" && "sections" in data) {
    dropdownContent = (
      <div
        ref={dropdownRef}
        className="fixed left-1/2 top-[76px] z-50 w-full max-w-[1920px] px-4 md:px-8 -translate-x-1/2"
        style={{ pointerEvents: "auto" }}
      >
        <div className={panelClasses}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.sections.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-4 px-4 sm:px-8">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <h4 className="text-base font-bold text-slate-900 font-['Lexend']">
                    {group.title}
                  </h4>
                </div>
                <div className="flex flex-col gap-2">
                  {group.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      to={item.href || "#"}
                      onClick={() => {
                        if (onClose) onClose();
                      }}
                      className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#EFF6FF] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    >
                      <span className="text-[15px] font-medium text-slate-600 group-hover:text-[#1E40AF] transition-colors font-['DM_Sans'] leading-tight">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else if ("items" in data) {
    dropdownContent = (
      <div
        ref={dropdownRef}
        className="fixed left-1/2 top-[76px] z-50 w-full max-w-[1920px] px-4 md:px-8 -translate-x-1/2"
        style={{ pointerEvents: "auto" }}
      >
        <div className={`${panelClasses} max-w-lg mx-auto px-6 sm:px-10`}>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900 font-['Lexend']">
              {data.title}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {data.items.map((item, idx) => (
              <Link
                key={idx}
                to={
                  "href" in item && typeof item.href === "string"
                    ? item.href
                    : "#"
                }
                onClick={() => {
                  if (onClose) onClose();
                }}
                className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#EFF6FF] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                <span className="text-base font-medium text-slate-700 group-hover:text-[#1E40AF] transition-colors font-['DM_Sans'] leading-tight">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!dropdownContent) return null;

  return dropdownContent;
};
