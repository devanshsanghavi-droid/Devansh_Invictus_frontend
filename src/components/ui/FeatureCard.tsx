import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<any>;
  metrics?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  metrics,
}) => {
  return (
    <div className="group flex-1 min-w-0 h-full">
      <div className="relative h-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 lg:p-8
                      hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/10 
                      hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out
                      overflow-hidden flex flex-col">
        
        {/* Simplified gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/80 via-transparent to-[#DBEAFE]/40 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header with icon and metrics */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            {Icon && (
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A]
                              rounded-xl flex items-center justify-center shadow-md
                              group-hover:scale-105 transition-transform duration-300">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            )}
            {metrics && (
              <div className="bg-[#EFF6FF] rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-[#2563EB]/20
                              group-hover:border-[#2563EB]/40
                              transition-all duration-300 flex-shrink-0">
                <span className="text-xs font-medium text-[#1E40AF] transition-colors duration-300">
                  {metrics}
                </span>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 leading-tight sm:leading-7 lg:leading-8 tracking-tight mb-2 sm:mb-3 
                           group-hover:text-[#2563EB] transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed sm:leading-6 transition-colors duration-300">
              {description}
            </p>
          </div>
          
          {/* Simplified interactive elements - now at bottom */}
          <div className="mt-4 sm:mt-6 lg:mt-8 flex items-center opacity-0 group-hover:opacity-100 
                          transform translate-y-2 group-hover:translate-y-0 
                          transition-all duration-300">
            <div className="w-full h-0.5 bg-gradient-to-r from-[#2563EB] to-[#DBEAFE] rounded-full mr-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
