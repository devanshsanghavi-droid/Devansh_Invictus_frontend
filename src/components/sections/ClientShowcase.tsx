
import React from "react";
import { TrendingUp, Award, Target } from "lucide-react";

export const ClientShowcase: React.FC = () => {
  const clients = [
    {
      name: "Votorantim Group",
      industry: "Industrial Conglomerate",
      logo: "VG",
      challenge: "Fragmented data across 20+ subsidiaries hindering strategic decision-making",
      solution: "Unified data platform with real-time analytics and predictive maintenance across all operations",
      results: {
        metric1: { value: "45%", label: "Operational Efficiency Gain" },
        metric2: { value: "$12M", label: "Annual Cost Savings" },
        metric3: { value: "80%", label: "Faster Reporting" }
      },
      technologies: ["Snowflake", "Tableau", "AWS"],
      timeframe: "18 months",
      testimonial: "Invictus Data transformed our data landscape, enabling data-driven decisions across our entire conglomerate.",
      gradient: "from-[#1E3A8A] via-[#2563EB] to-[#93C5FD]"
    },
    {
      name: "PwC Brazil",
      industry: "Professional Services",
      logo: "PwC",
      challenge: "Manual client reporting processes taking 40+ hours per project",
      solution: "Automated analytics pipeline with custom dashboards and AI-powered insights generation",
      results: {
        metric1: { value: "85%", label: "Time Reduction" },
        metric2: { value: "300%", label: "Client Capacity Increase" },
        metric3: { value: "95%", label: "Client Satisfaction" }
      },
      technologies: ["Power BI", "Azure", "Python"],
      timeframe: "12 months",
      testimonial: "Our consulting efficiency tripled, allowing us to serve more clients with deeper insights.",
      gradient: "from-[#2563EB] via-[#60A5FA] to-[#1E3A8A]"
    },
    {
      name: "Tegma Logística",
      industry: "Logistics & Transport",
      logo: "TL",
      challenge: "Poor visibility into fleet operations causing 25% revenue loss from delays",
      solution: "Real-time IoT analytics with predictive routing and maintenance scheduling",
      results: {
        metric1: { value: "35%", label: "Delivery Time Reduction" },
        metric2: { value: "60%", label: "Maintenance Cost Savings" },
        metric3: { value: "99.2%", label: "On-time Delivery Rate" }
      },
      technologies: ["AWS IoT", "Apache Kafka", "ML Models"],
      timeframe: "14 months",
      testimonial: "Predictive analytics revolutionized our logistics operations, dramatically improving our bottom line.",
      gradient: "from-[#60A5FA] via-[#2563EB] to-[#1E3A8A]"
    }
  ];

  return (
    <div className="flex flex-col items-center pt-[156px] px-5 relative z-10">
      <div className="flex flex-col items-center text-center mb-[86px]">
        <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-6 py-2 mb-6
                        border border-slate-200 hover:bg-slate-100 hover:border-[#2563EB]/30 transition-all duration-300">
          <Award className="w-4 h-4 text-[#1E40AF]" />
          <span className="text-sm font-medium text-slate-900">Client Success Stories</span>
        </div>
        <h2 className="text-6xl font-semibold text-slate-900 leading-[70px] mb-4 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Proven Enterprise Results
        </h2>
        <p className="text-[28px] text-slate-600 font-light leading-10 max-w-[652px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          Real businesses, measurable outcomes. Here's how we've helped leading organizations transform their operations through data and AI.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] px-5">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className={`group bg-white backdrop-blur-xl rounded-2xl border border-slate-200 overflow-hidden 
                       hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2563EB]/20 
                       hover:bg-slate-100 hover:border-[#2563EB]/30 transition-all duration-700 
                       animate-fade-in relative`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB]/20 to-[#93C5FD]/20 
                            rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10"></div>
            
            {/* Header */}
            <div className={`bg-gradient-to-r ${client.gradient} p-6 text-slate-900 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 backdrop-blur-sm rounded-lg flex items-center justify-center 
                                  font-bold text-sm group-hover:scale-110 group-hover:bg-slate-100 transition-all duration-300">
                    {client.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-[#1E40AF] transition-colors duration-300">
                      {client.name}
                    </h3>
                    <p className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors duration-300">
                      {client.industry}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-[#1E40AF] transition-colors duration-300">
                    Project Duration: {client.timeframe}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-0 
                              group-hover:opacity-5 transition-opacity duration-700 rounded-b-2xl`}></div>
              
              <div className="relative z-10">
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-400 mb-2 uppercase tracking-wide
                                 group-hover:text-red-300 transition-colors duration-300">
                    Challenge
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                    {client.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide
                                 group-hover:text-[#1E40AF] transition-colors duration-300">
                    Solution
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                    {client.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wide
                                 group-hover:text-green-300 transition-colors duration-300">
                    Results
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(client.results).map(([key, result], resultIndex) => (
                      <div key={key} className="bg-white backdrop-blur-sm rounded-lg p-3 border border-slate-200
                                                 group-hover:bg-[#2563EB]/10 group-hover:border-[#2563EB]/30 
                                                 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-[#1E40AF] group-hover:text-slate-900 
                                           group-hover:scale-110 transition-all duration-300">
                            {result.value}
                          </span>
                          <TrendingUp className="w-5 h-5 text-green-400 group-hover:scale-125 group-hover:text-green-300 
                                                 transition-all duration-300" />
                        </div>
                        <div className="text-xs text-slate-600 font-medium group-hover:text-slate-800 transition-colors duration-300">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide
                                 group-hover:text-[#1E40AF] transition-colors duration-300">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {client.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-white backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-slate-600
                                   border border-slate-200 hover:bg-[#2563EB]/20 hover:border-[#2563EB]/40 
                                   hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-t border-slate-200 pt-4 group-hover:border-[#2563EB]/30 transition-colors duration-300">
                  <p className="text-sm text-slate-600 italic leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
                    "{client.testimonial}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-white backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto border border-slate-200
                        hover:bg-slate-100 hover:border-[#2563EB]/30 hover:scale-105 hover:shadow-2xl 
                        hover:shadow-[#2563EB]/20 transition-all duration-700 relative overflow-hidden group">
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#93C5FD]/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-[#1E40AF] transition-colors duration-300">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-600 mb-6 group-hover:text-slate-900 transition-colors duration-300">
              Join these industry leaders and start your data transformation journey today.
            </p>
            <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-3 
                               rounded-full font-medium hover:scale-110 hover:shadow-xl hover:shadow-[#2563EB]/30 
                               transition-all duration-300 relative overflow-hidden group/btn">
              <span className="relative z-10">Schedule a Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] to-[#1E40AF] 
                              opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;
