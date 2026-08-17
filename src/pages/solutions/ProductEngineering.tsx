import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Code, Smartphone, Palette, Rocket, TestTube } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Seo from "@/components/Seo";

const ProductEngineering: React.FC = () => {
  const capabilities = [
    {
      icon: Code,
      title: "Frontend & Backend Development",
      description: "React, Flutter, Node.js, Django - full-stack expertise across modern technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description: "User-centered design and rapid prototyping for optimal user experiences"
    },
    {
      icon: Rocket,
      title: "MVP to Enterprise SaaS Platforms",
      description: "Scalable architecture that grows from prototype to enterprise-grade solutions"
    },
    {
      icon: TestTube,
      title: "Full Agile SDLC & QA Integration",
      description: "Complete software development lifecycle with integrated testing and DevOps"
    }
  ];

  const useCases = [
    {
      title: "Custom SaaS Product Launch",
      description: "End-to-end development of subscription-based software platforms with user management and billing"
    },
    {
      title: "Mobile Apps for Logistics Tracking",
      description: "Real-time tracking applications for supply chain and delivery management"
    },
    {
      title: "B2B Admin & Client Dashboards",
      description: "Comprehensive dashboard solutions for business management and client portal access"
    }
  ];

  return (
    <>
      <Seo 
        title="Product Engineering Solutions | Invictus Data"
        description="End-to-end product engineering services from ideation to deployment. Build scalable, modern applications with expert teams."
        keywords="product engineering, software development, application development, product design, agile development"
      />
      
    <>
      <div className="w-full min-h-screen bg-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto">
          {/* Hero Section */}
          <section className="px-8 py-20 max-md:px-5 max-md:py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold text-slate-900 mb-6 max-md:text-4xl max-sm:text-3xl font-['Lexend']">
                Product Engineering
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-md:text-lg font-['DM_Sans']">
                Build robust web, mobile, and SaaS applications with speed, precision, and scale.
              </p>
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-full flex items-center justify-center mx-auto mb-8">
                <Code className="w-8 h-8 text-black" />
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">
                Core Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white backdrop-blur-md border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-[#2563EB]/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 font-['Lexend']">
                        {capability.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-['DM_Sans']">
                        {capability.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Solution Detail Blocks */}
          <section className="px-8 py-20 max-md:px-5">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Mobile Development & Modernization */}
              <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[#2563EB]/30">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-8 h-8 text-[#1E40AF]" />
                  <h2 className="text-2xl md:text-3xl font-bold font-['Lexend'] text-slate-900">Mobile Development & Modernization</h2>
                </div>
                <p className="text-slate-700 font-['DM_Sans'] text-lg leading-relaxed mb-2">
                  From iOS and Android to Flutter and React Native, we build high-performance mobile applications using both native and cross-platform frameworks, tailored to your business goals and user experience needs and future-ready scalability. Native & Cross platform. Whether it’s migrating to modern frameworks, revamping codebases, architectures, and interfaces, enhancing scalability, or optimizing for new OS versions, we future-proof your mobile presence end-to-end.
                </p>
              </div>
              {/* Product Design & Development */}
              <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[#2563EB]/30">
                <div className="flex items-center gap-4 mb-4">
                  <Palette className="w-8 h-8 text-[#1E40AF]" />
                  <h2 className="text-2xl md:text-3xl font-bold font-['Lexend'] text-slate-900">Product Design & Development</h2>
                </div>
                <p className="text-slate-700 font-['DM_Sans'] text-lg leading-relaxed mb-2">
                  We turn ideas into scalable digital products through end-to-end design, development, and deployment, built for usability, performance, and growth. We deliver products that are user-centric, technically sound, and launch-ready.
                </p>
              </div>
              {/* Application Maintenance */}
              <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[#2563EB]/30">
                <div className="flex items-center gap-4 mb-4">
                  <TestTube className="w-8 h-8 text-[#1E40AF]" />
                  <h2 className="text-2xl md:text-3xl font-bold font-['Lexend'] text-slate-900">Application Maintenance</h2>
                </div>
                <p className="text-slate-700 font-['DM_Sans'] text-lg leading-relaxed mb-2">
                  We deliver reliable application lifecycle management, ensuring stability, performance, and adaptability through continuous monitoring and enhancement. We help businesses stay agile, minimize risk, and maximize ROI. From performance monitoring to issue resolution and feature enhancements, our support team ensures your app stays reliable, up-to-date across devices and OS versions, and user-ready, 24/7.
                </p>
              </div>
              {/* Site Reliability Engineering */}
              <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[#2563EB]/30">
                <div className="flex items-center gap-4 mb-4">
                  <Rocket className="w-8 h-8 text-[#1E40AF]" />
                  <h2 className="text-2xl md:text-3xl font-bold font-['Lexend'] text-slate-900">Site Reliability Engineering</h2>
                </div>
                <p className="text-slate-700 font-['DM_Sans'] text-lg leading-relaxed mb-2">
                  Our platform engineering expertise ensures robust observability, proactive incident management, and seamless scalability to power your business-critical applications. We build and maintain infrastructure that drives continuous delivery and operational excellence. We specialize in cloud-native engineering, harnessing the latest technologies like Kubernetes, microservices, and serverless to build resilient, scalable applications. Our expertise in leveraging cutting-edge tools and best practices ensure scalability for mission-critical applications.
                </p>
              </div>
              {/* Engineering Quality & Productivity */}
              <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[#2563EB]/30">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="w-8 h-8 text-[#1E40AF]" />
                  <h2 className="text-2xl md:text-3xl font-bold font-['Lexend'] text-slate-900">Engineering Quality & Productivity</h2>
                </div>
                <p className="text-slate-700 font-['DM_Sans'] text-lg leading-relaxed mb-2">
                  By optimizing developer workflows and fostering collaboration, we boost productivity and accelerate time-to-market without compromising quality. We prioritize engineering excellence through rigorous code quality, automated testing, and continuous integration.
                </p>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">
                Real-World Applications
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-white backdrop-blur-md border border-slate-200 rounded-xl p-8 hover:bg-white transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 font-['Lexend']">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 font-['DM_Sans']">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Invictus Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">
                Why Choose Invictus?
              </h2>
              <div className="bg-white backdrop-blur-md border border-slate-200 rounded-xl p-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Dedicated Development Pods
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Specialized teams for each product lifecycle stage from ideation to scale
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#DBEAFE] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Product + AI Integration
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        AI capabilities built into workflows for enhanced user experiences
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Proven Delivery in Regulated Industries
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Experience with compliance requirements and security standards
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-['Lexend']">
                  Ready to Build Your Next Product?
                </h2>
                <p className="text-slate-600 mb-6 font-['DM_Sans']">
                  Let's turn your product vision into a market-ready solution.
                </p>
                <div className="flex gap-4 justify-center max-sm:flex-col">
                  <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none">
                    Start Building
                  </CustomButton>
                  <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
                    View Product Portfolio
                  </CustomButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
    </>

  );
};

export default ProductEngineering;
