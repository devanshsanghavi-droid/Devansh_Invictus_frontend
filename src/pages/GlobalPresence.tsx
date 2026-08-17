import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import { MapPin, Globe, Users, Clock, Phone, Mail, Building, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import office images
import OfficeImg1 from "@/assets/office/IMG_1590.jpg";
import OfficeImg2 from "@/assets/office/IMG_3385.jpg";
import OfficeImg3 from "@/assets/office/IMG_1248.jpg";
import OfficeImg4 from "@/assets/office/53eb4a83-e9e8-41c7-8112-426db460cf3e.jpg";
import OfficeImg5 from "@/assets/office/IMG_3380.jpg";
import Seo from "@/components/Seo";

const officeLocations = [
  {
    name: "Global Headquarters",
    location: "Los Altos, CA, USA",
    address: "Los Altos, CA , USA",
    timezone: "PST (UTC-8)",
    email: "hello@invictus.com",
    mapUrl: "https://maps.app.goo.gl/pFLAxp4Du91E19so8",
    description: "Our global headquarters serves as the central hub for strategic initiatives, innovation, and executive leadership.",
    teamSize: "50+ Team Members",
    specialties: ["Strategic Planning", "Innovation Lab", "Executive Leadership"],
    coordinates: { lat: 37.3855, lng: -122.1141 }
  },
  {
    name: "Chennai Office",
    location: "Chennai, Tamil Nadu, India",
    address: "B-16 & 17, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu – 600032",
    timezone: "IST (UTC+5:30)",
    email: "chennai@invictus.com",
    mapUrl: "https://maps.app.goo.gl/MbrhYi2XuPpAf3hL8?g_st=aw",
    description: "Our largest development center specializing in data engineering, AI/ML, and product development.",
    teamSize: "150+ Team Members",
    specialties: ["Data Engineering", "AI/ML Development", "Product Engineering"],
    coordinates: { lat: 13.0827, lng: 80.2707 }
  },
  {
    name: "Bangalore Office",
    location: "Bengaluru, Karnataka, India",
    address: "28, 7th St, Agara Village, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
    timezone: "IST (UTC+5:30)",
    email: "bangalore@invictus.com",
    mapUrl: "https://maps.app.goo.gl/oysZw8xZWLKr3uhs5",
    description: "Innovation hub focused on emerging technologies, research, and client delivery.",
    teamSize: "100+ Team Members",
    specialties: ["Emerging Technologies", "Research & Development", "Client Delivery"],
    coordinates: { lat: 12.9716, lng: 77.5946 }
  }
];

const globalStats = [
  { icon: Users, label: "Global Team", value: "300+", description: "Experts across 3 continents" },
  { icon: Globe, label: "Countries", value: "3", description: "USA, Germany, India" },
  { icon: Building, label: "Offices", value: "3", description: "Strategic locations worldwide" },
  { icon: Clock, label: "24/7 Support", value: "Always On", description: "Round-the-clock delivery" }
];

const GlobalPresence: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Seo 
        title="Global Presence | Invictus Data"
        description="Invictus Data's global reach and local expertise. Serving clients worldwide with AI and data engineering solutions across multiple continents."
        keywords="global presence, worldwide services, international AI solutions, global data engineering, offshore development"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      {/* Navbar */}
      <div className="relative z-20">
      <Navbar />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-24">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-6 py-2 mb-6
                        border border-slate-200 hover:bg-slate-100 hover:border-[#2563EB]/30 transition-all duration-300"
            >
              <Globe className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-slate-900">Worldwide Reach</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-['Lexend']"
            >
              Global Presence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed"
            >
              Invictus Data operates across multiple continents, serving clients worldwide with strategic offices in the United States and India, enabling 24/7 delivery and global expertise.
            </motion.p>
          </div>
        </section>

        {/* Global Stats */}
        <section className="w-full py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white backdrop-blur-xl rounded-3xl border border-slate-200 p-8 text-center
                           hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 
                           transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Office Locations */}
        <section className="w-full py-16 px-6 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']"
          >
            Our Global Offices
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white backdrop-blur-xl rounded-3xl border border-slate-200 
                         hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 
                         transition-all duration-500 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl 
                                   flex items-center justify-center">
                      <Building className="w-6 h-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{office.name}</h3>
                      <p className="text-slate-600 text-sm">{office.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#1E40AF] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-slate-800 text-sm leading-relaxed">{office.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-[#1E40AF] flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{office.timezone}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#1E40AF] flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{office.email}</span>
                    </div>

                    <a 
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#1E40AF] hover:text-slate-900 transition-colors"
                    >
                      <MapPin className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">View on Map</span>
                    </a>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {office.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#1E40AF]" />
                      <span className="text-slate-800 text-sm font-medium">{office.teamSize}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {office.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#2563EB]/20 text-[#2563EB] text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Global Presence Matters */}
        <section className="w-full py-16 px-6 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']"
          >
            Why Global Presence Matters
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Delivery",
                description: "Round-the-clock development and support across multiple time zones"
              },
              {
                icon: Users,
                title: "Local Expertise",
                description: "Deep understanding of regional markets and cultural nuances"
              },
              {
                icon: Globe,
                title: "Global Talent",
                description: "Access to diverse talent pools and specialized skills worldwide"
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Multiple quality gates and review processes across locations"
              },
              {
                icon: Building,
                title: "Scalable Operations",
                description: "Ability to scale teams and resources based on project needs"
              },
              {
                icon: ArrowRight,
                title: "Continuous Innovation",
                description: "Cross-pollination of ideas and best practices across regions"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white backdrop-blur-xl rounded-3xl border border-slate-200 p-6
                           hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 
                           transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl 
                                 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full py-20 px-6 relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">
              Ready to Work with a Global Team?
            </h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">
              Connect with our global team and experience the power of worldwide expertise and 24/7 delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300" onClick={() => navigate('/contact')}>
                Contact Us
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
    </>

  );
};

export default GlobalPresence; 
