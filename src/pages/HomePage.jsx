import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Cpu, Zap, CheckCircle2, ChevronRight, Globe, Code, Layers } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StatCard } from '../components/ui/StatCard';
import { ServiceCard } from '../components/ui/ServiceCard';
import { ProjectCard } from '../components/ui/ProjectCard';
import { IndustryCard } from '../components/ui/IndustryCard';
import { ProcessStep } from '../components/ui/ProcessStep';
import { CTASection } from '../components/ui/CTASection';

import { companyInfo } from '../data/companyData';
import { statsData, whyChooseUsData, processTimeline } from '../data/statsData';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { industriesData } from '../data/industriesData';
import { techBadges } from '../data/techData';

export const HomePage = ({
  onNavigate,
  onSelectService,
  onSelectProject,
  onOpenContactModal
}) => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-8 shadow-[0_0_25px_rgba(0,240,255,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span>Next-Generation Enterprise Technology & AI Solutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto"
          >
            Transforming Ideas Into <span className="text-gradient">Digital Solutions</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-normal"
          >
            We help businesses build, grow, and scale with innovative technology solutions across web, applications, cloud, digital marketing, AI and automation.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <button
              onClick={() => {
                onNavigate('contact');
                if (onOpenContactModal) onOpenContactModal();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 flex items-center justify-center gap-3 group active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Interactive Floating Micro-Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { label: 'Enterprise Security', icon: Shield },
              { label: 'AI Automation', icon: Cpu },
              { label: 'Cloud Resilience', icon: Zap },
              { label: '24/7 SLA Support', icon: CheckCircle2 }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/5 text-xs text-slate-300 font-medium hover:border-cyan-500/30 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 2. BUSINESS STATISTICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="End-To-End Tech Capabilities"
          title="Technology That Moves Your Business Forward"
          subtitle="Comprehensive digital services designed to accelerate operational scale, acquire customers, and modernize enterprise software."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </section>

      {/* 4. WHY WATY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The WatY AI Advantage"
          title="We Don't Just Build Technology. We Build Business Solutions."
          subtitle="We bridge the gap between complex software engineering and executive business growth."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. PROCESS SECTION (Visual Timeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Agile Delivery Framework"
          title="Our Structured Engineering Process"
          subtitle="A predictable, transparent lifecycle driving projects from concept discovery to market deployment."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 relative">
          {processTimeline.map((step, index) => (
            <ProcessStep
              key={step.step}
              step={step}
              index={index}
              totalSteps={processTimeline.length}
            />
          ))}
        </div>
      </section>

      {/* 6. TECHNOLOGIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Modern Tech Stack"
          title="Powered by Enterprise-Grade Tools & Standards"
          subtitle="We leverage proven technologies, robust frameworks, and next-generation AI models."
          className="mb-12"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {techBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-4 rounded-xl bg-slate-900/80 border border-white/5 hover:border-cyan-500/40 text-center flex flex-col items-center justify-center gap-2 group hover:bg-slate-800/80 transition-all cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                {badge.name}
              </span>
              <span className="text-[9px] text-slate-500 font-mono truncate max-w-full">
                {badge.category}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Proven Track Record"
            title="Featured Success Stories"
            subtitle="Explore how WatY AI Technologies delivers measurable transformation for our enterprise partners."
            centered={false}
          />
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-200 transition-colors shrink-0"
          >
            <span>View All Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </section>

      {/* 8. INDUSTRIES SERVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Domain Expertise"
          title="Industries We Empower"
          subtitle="Specialized technology frameworks tailored to regulatory requirements and operational demands."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </section>

      {/* 9. STRONG CTA SECTION */}
      <CTASection
        onOpenContactModal={onOpenContactModal}
        onNavigateContact={() => onNavigate('contact')}
      />

    </div>
  );
};
