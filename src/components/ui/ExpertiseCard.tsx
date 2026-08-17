
import React from "react";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  featured?: boolean;
  popular?: boolean;
}

const getIcon = (iconName: string) => {
  const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
  return IconComponent || Icons.Circle;
};

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
  icon,
  href,
  featured,
  popular
}) => {
  const IconComponent = getIcon(icon);

  return (
    <Link to={href} className="group block">
      <div className="relative h-full bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-[#2563EB]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2563EB]/20">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#0EA5E9]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Badge */}
        {(featured || popular) && (
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              featured 
                ? 'bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30' 
                : 'bg-[#0EA5E9]/20 text-[#0EA5E9] border border-[#0EA5E9]/30'
            }`}>
              {featured ? 'Featured' : 'Popular'}
            </span>
          </div>
        )}
        
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB]/20 to-[#0EA5E9]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-8 h-8 text-[#2563EB] group-hover:text-[#0EA5E9] transition-colors duration-300" />
          </div>
          
          {/* Content */}
          <h3 className="text-xl font-semibold font-['Sora'] text-white mb-4 group-hover:text-[#2563EB] transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-300 font-['DM_Sans'] text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
          
          {/* Arrow */}
          <div className="flex items-center text-[#2563EB] group-hover:text-[#0EA5E9] transition-colors duration-300">
            <span className="text-sm font-medium mr-2">Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExpertiseCard;
