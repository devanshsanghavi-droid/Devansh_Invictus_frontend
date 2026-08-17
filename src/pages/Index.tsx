import React, { useState, lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import Seo from "@/components/Seo";

// Lazy load heavy components
const Features = lazy(() => import("@/components/sections/Features"));
const Statistics = lazy(() => import("@/components/sections/Statistics"));
const Industries = lazy(() => import("@/components/sections/Industries"));
const ServicesOverview = lazy(
  () => import("@/components/sections/ServicesOverview")
);

const testimonials = [
  {
    quote:
      "We went from managing everything in siloed spreadsheets to a unified reporting system - our analytics now takes minutes and gives us more confidence in our decisions.",
    attribution: "VP, Sales & Marketing",
    org: "D2C firm",
  },
  {
    quote:
      "Their engineering team feels like an extension of ours - fast, scalable, and always shipping with quality.",
    attribution: "CTO",
    org: "SaaS company",
  },
  {
    quote:
      "Before working with them, we were reacting to reports. Now we have dashboards that tell us what will happen next week - not what happened last week.",
    attribution: "CMO",
    org: "Home decor eCommerce brand",
  },
  {
    quote:
      "What we got was not just developers, but engineers who understood product, infra, and scale. Their expertise shows in the quality of conversations.",
    attribution: "Product Head",
    org: "AI-powered SaaS tool",
  },
  {
    quote:
      "We've never felt like support was an afterthought. Whether it was a 1am alert or a live issue on Black Friday, they showed up every time.",
    attribution: "Operations Lead",
    org: "eCommerce brand",
  },
  {
    quote:
      "It's rare to find a partner who can engineer platforms, deliver insights, and help you scale the team. Invictus Data does all three.",
    attribution: "Chief Digital Officer",
    org: "Global CPG",
  },
];

// Loading placeholder for lazy-loaded sections
const SectionLoader = () => (
  <div className="w-full border-b border-slate-200">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="h-64 w-full bg-slate-50" />
    </div>
  </div>
);

const Index: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <Seo
        title="Invictus Data - AI & Data Engineering Excellence"
        description="Transform your business with AI, data platforms, and cloud-native software engineering. Expert solutions in data architecture, machine learning, and enterprise AI."
        keywords="AI data engineering, data platforms, machine learning, enterprise AI, cloud-native development, business intelligence, data architecture, software engineering, ecommerce analytics"
      />
      <div className="w-full min-h-screen bg-white overflow-x-hidden">
        <Navbar
          showContactForm={showContactForm}
          setShowContactForm={setShowContactForm}
        />

        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Statistics />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Industries />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ServicesOverview />
        </Suspense>

        {/* Client testimonials */}
        <section className="w-full border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 mb-16">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-5">Client feedback</p>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold text-slate-900">
                  What our clients say
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.attribution + testimonial.org}
                  className="border-r border-b border-slate-200 p-8 flex flex-col"
                >
                  <blockquote className="text-[15px] leading-relaxed text-slate-700 flex-grow">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-8 pt-5 border-t border-slate-200">
                    <span className="block text-sm font-medium text-slate-900">
                      {testimonial.attribution}
                    </span>
                    <span className="block text-sm text-slate-500 mt-0.5">
                      {testimonial.org}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
