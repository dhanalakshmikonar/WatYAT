import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Sparkles, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
import { companyInfo } from '../data/companyData';
import { whyChooseUsData } from '../data/statsData';
import { techBadges } from '../data/techData';

export const AboutPage = ({ onNavigate, onOpenContactModal }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Digital Transformation & AI Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Engineering the Future of <span className="text-gradient">Business Technology.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            At WatY AI Technologies, we do not position ourselves as just another website development vendor. We act as your strategic technology partner, delivering enterprise software, AI automation, and cloud resiliency.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-white mb-4">Our Mission</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{companyInfo.mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-blue-500/30 shadow-2xl relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-white mb-4">Our Vision</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{companyInfo.vision}</p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Core Values"
          subtitle="The foundational ethics behind every line of code we ship."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyInfo.values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Strategic Partnership"
          title="Why Leading Brands Trust WatY AI"
          subtitle="We combine human design empathy with computational rigor."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, idx) => (
            <div key={item.id} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
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
