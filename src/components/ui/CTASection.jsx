import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const CTASection = ({ onOpenContactModal, onNavigateContact }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Glow Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/80 border border-cyan-500/30 p-8 sm:p-14 overflow-hidden shadow-2xl shadow-cyan-500/10 text-center"
        >
          {/* Animated Background Mesh Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>Ready for Next-Gen Transformation?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something <span className="text-gradient">Great Together.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Partner with WatY AI Technologies to architect scalable web apps, custom mobile solutions, automated AI models, and high-availability cloud infrastructure.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  if (onNavigateContact) onNavigateContact();
                  if (onOpenContactModal) onOpenContactModal();
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 flex items-center justify-center gap-3 group active:scale-95"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>NDA Protection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Fast 24-hr Response</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
