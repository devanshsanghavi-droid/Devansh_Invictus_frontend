import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Key, Heart, Clock, BookOpen, RefreshCw, FileText, Mail } from "lucide-react";

const UnderstandingHiringProcess: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);

  const sections = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "I can't find the role I was asked to apply for. What should I do?",
      content: "Try searching the job title or keyword on the Invictus Data Careers page. If that doesn't help, reach out to your contact for the job ID number, then search using that ID.",
      details: "This ensures you're applying to the exact role referenced."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "I forgot my username or password. How can I recover it?",
      content: "No problem! Click the Apply Now button on the job site. Then select either:",
      list: [
        "Forgot your username or",
        "Forgot your password"
      ],
      details: "You'll be guided through a secure process to reset your credentials."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "I need accommodations for the application or interview process. Who can help?",
      content: "We're committed to an inclusive hiring experience. Let your recruiter or talent contact know about your needs.",
      details: "We're happy to provide any accommodations that support your access and comfort. Tip: You can also check our workplace accessibility resources on the site."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "How long will it take to hear back about my application?",
      content: "It varies based on the role and the business unit. Your recruiter is your best point of contact for updates and timelines.",
      details: "We prioritize transparency and do our best to keep you informed at every stage."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "How should I prepare for an interview at Invictus Data?",
      content: "Each interview is tailored to the role you've applied for. Preparation tips may include:",
      list: [
        "Reviewing your recent projects and outcomes",
        "Brushing up on technical concepts (for engineering/data roles)",
        "Practicing behavioral questions with the STAR method"
      ],
      details: "Your recruiter will share specifics about your interview type and focus areas."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "If I don't get selected, can I apply again?",
      content: "Yes, absolutely. We encourage you to apply again - either for the same type of role at a later time or for a new opportunity that better matches your strengths."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "I applied before but wasn't selected. A similar role is open now - should I reapply?",
      content: "Yes - each job opening requires a new application. We recommend using your existing username and password to streamline the process."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Still need help?",
      content: "Reach out to us or connect with a recruiter on LinkedIn for more assistance.",
      links: [
        { text: "careers@invictusdata.ai", href: "mailto:careers@invictusdata.ai" },
        { text: "LinkedIn", href: "https://www.linkedin.com/company/invictus-data/posts/?feedView=all" }
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
          <Badge variant="outline" className="mb-4 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
            Application Process
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-['Lexend']">
            Understanding the Hiring Process
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From applying to interviewing, here's what to expect when joining our team.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <Card key={index} className="bg-[#1a1a1a]/80 border-[#3B82F6]/30 hover:border-[#3B82F6]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#3B82F6]/10">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#3B82F6]/20 rounded-lg text-[#3B82F6]">
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
                {section.list && (
                  <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
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
                        className="inline-flex items-center px-3 py-1 text-sm bg-[#3B82F6]/20 text-[#3B82F6] rounded-full hover:bg-[#3B82F6]/30 transition-colors duration-200"
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

        {/* Process Timeline */}
        <div className="bg-gradient-to-r from-[#3B82F6]/10 to-[#2563EB]/10 rounded-2xl p-8 border border-[#3B82F6]/30 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Typical Application Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply", desc: "Submit your application through our careers portal" },
              { step: "2", title: "Review", desc: "Our team reviews your application within 1-2 weeks" },
              { step: "3", title: "Interview", desc: "Participate in technical and behavioral interviews" },
              { step: "4", title: "Decision", desc: "Receive feedback and next steps within 1 week" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-slate-900 font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 border border-[#3B82F6]/30">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Browse our current openings and take the first step towards joining our innovative team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-semibold rounded-xl hover:from-[#2563EB] hover:to-[#3B82F6] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20"
              >
                Browse Openings
              </a>
              <a
                href="/careers/finding-the-right-fit"
                className="inline-flex items-center px-8 py-4 bg-transparent border border-[#3B82F6] text-[#3B82F6] font-semibold rounded-xl hover:bg-[#3B82F6] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingHiringProcess; 