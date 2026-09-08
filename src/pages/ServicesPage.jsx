import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Layers, Cpu, Globe, Smartphone, TrendingUp, Cloud, ShieldCheck } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
import { servicesData } from '../data/servicesData';

export const ServicesPage = ({ onNavigate, onSelectService, onOpenContactModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.id === activeCategory);

  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16">
      
      {/* Services Hero Header */}
      <section className="relative pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Comprehensive Technology Offerings</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Enterprise Services & <span className="text-gradient">Technology Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Explore our end-to-end technology capabilities spanning custom web applications, native mobile apps, cloud architectures, AI automation engines, and growth marketing.
          </motion.p>

          {/* Quick Filter Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              All Solutions
            </button>
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveCategory(s.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === s.id
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {filteredServices.map((service, index) => {
            const IconComponent = Icons[service.iconName] || Icons.Code;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{service.badge}</span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Key Capabilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-xl bg-slate-950/60 border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 font-semibold mr-2">Tech:</span>
                    {service.techExamples.map((t, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onSelectService(service)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
                    >
                      <span>Explore {service.title} Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Business Benefits Box */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-cyan-500/20 space-y-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Business Benefits</span>
                  </h3>
                  <ul className="space-y-3 text-xs text-slate-300">
                    {service.businessBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Strong CTA */}
      <CTASection
        onOpenContactModal={onOpenContactModal}
        onNavigateContact={() => onNavigate('contact')}
      />

    </div>
  );
};
