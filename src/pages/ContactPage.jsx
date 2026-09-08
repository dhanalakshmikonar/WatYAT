import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/ui/ContactForm';
import { companyInfo } from '../data/companyData';

export const ContactPage = () => {
  return (
    <div className="space-y-24 sm:space-y-32 pt-28 pb-16">
      
      {/* Hero Header */}
      <section className="relative pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Direct Enterprise Engagement</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Let's Build Something <span className="text-gradient">Great Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Have a project concept, custom AI requirement, or need an enterprise cloud consultation? Schedule a direct discussion with our technical leadership.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Grid (Form + Contact Info Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Corporate Headquarters</h3>
              
              <div className="space-y-5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 mb-0.5">Office Address</h4>
                    <p className="font-semibold text-white">{companyInfo.contact.address}</p>
                    <p className="text-xs text-slate-400 mt-1">{companyInfo.contact.hqRegion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 mb-0.5">Email Queries</h4>
                    <a href={`mailto:${companyInfo.contact.email}`} className="font-semibold text-cyan-300 hover:underline">
                      {companyInfo.contact.email}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Support: {companyInfo.contact.supportEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 mb-0.5">Direct Phone</h4>
                    <p className="font-semibold text-white">{companyInfo.contact.phone}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Mon - Fri, 9:00 AM - 7:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Connect Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/20 space-y-4">
              <h3 className="text-lg font-bold text-white">Connect Across Channels</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Follow our official technology channels for client updates, software releases, and AI engineering insights.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {companyInfo.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-white/5 hover:border-cyan-500/40 flex items-center justify-between text-xs text-slate-300 hover:text-cyan-300 transition-all"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
