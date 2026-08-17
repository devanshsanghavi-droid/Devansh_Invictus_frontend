import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Building2, Handshake, Globe, Mail } from "lucide-react";

const FindingTheRightFit: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);

  const sections = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "What degrees or training do I need to work at Invictus Data?",
      content: "We don't believe in one-size-fits-all. While some roles may require specific technical degrees or certifications, many do not. We evaluate your full experience, skill set, and potential - not just a diploma.",
      details: "Each job posting will clearly outline role-specific requirements."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "I'm a former employee. Can I be re-hired?",
      content: "Absolutely. We love welcoming Invictus Data alumni back! If you left in good standing, you're eligible to rejoin us.",
      details: "You can apply directly to open roles or join our Invictus Data Alumni Network to stay connected and hear about upcoming opportunities."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Where can I explore leadership or executive-level roles?",
      content: "All executive and experienced professional opportunities are listed on our Careers Page. We also encourage you to connect with our leadership and talent team via LinkedIn for updates on strategic hires and senior positions.",
      links: [
        { text: "Careers Page", href: "/careers" },
        { text: "LinkedIn", href: "https://www.linkedin.com/company/invictus-data/posts/?feedView=all" }
      ]
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Does Invictus Data offer an Employee Referral Program?",
      content: "Yes, we do. If you know someone who currently works at (or previously worked at) Invictus Data, feel free to ask them for a referral.",
      details: "Our referral program is an important part of how we grow our team with people who align with our values."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Is country residency or work authorization required to apply?",
      content: "In most cases, yes. Each role will include location and work eligibility requirements.",
      details: "Some positions support remote or hybrid work, while others require physical presence or local employment authorization. Be sure to check the specific job description."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Still unsure about your fit?",
      content: "Contact our talent team or reach out on LinkedIn for more clarity.",
      links: [
        { text: "careers@invictusdata.ai", href: "mailto:careers@invictusdata.ai" },
        { text: "LinkedIn", href: "https://www.linkedin.com/company/invictusdata" }
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} logoSize="sm" />
      </div>
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white">
            Careers at Invictus Data
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-['Lexend']">
            Finding the Right Fit
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            What you need to know about qualifications, referrals, and applying to join our team.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="bg-[#1a1a1a]/80 border-[#2563EB]/30 hover:border-[#2563EB]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2563EB]/10">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#2563EB]/20 rounded-lg text-[#2563EB]">
                    {section.icon}
                  </div>
                  <CardTitle className="text-lg md:text-xl text-slate-900 font-semibold leading-tight">
                    {section.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {section.content}
                </p>
                {section.details && (
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {section.details}
                  </p>
                )}
                {section.links && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center px-3 py-1 text-sm bg-[#2563EB]/20 text-[#2563EB] rounded-full hover:bg-[#2563EB]/30 transition-colors duration-200"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2563EB]/20 to-[#3B82F6]/20 rounded-2xl p-8 border border-[#2563EB]/30">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Explore our current openings and find the perfect role that matches your skills and aspirations.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-semibold rounded-xl hover:from-[#3B82F6] hover:to-[#2563EB] transition-all duration-300 shadow-lg shadow-[#2563EB]/20"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindingTheRightFit; 