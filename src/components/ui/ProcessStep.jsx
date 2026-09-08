import React from 'react';
import { motion } from 'framer-motion';

export const ProcessStep = ({ step, index, totalSteps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-start group"
    >
      {/* Top Step Counter & Glow Ring */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
          <span className="font-mono text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {step.step}
          </span>
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 opacity-80 animate-ping" />
        </div>
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
            STAGE {step.step}
          </span>
          <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            {step.title}
          </h3>
        </div>
      </div>

      <div className="pl-2 border-l-2 border-slate-800 group-hover:border-cyan-500/40 transition-colors space-y-2">
        <p className="text-xs font-semibold text-cyan-200">
          {step.subtitle}
        </p>
        <p className="text-slate-400 text-xs leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};
