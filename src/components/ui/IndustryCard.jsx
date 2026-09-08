import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const IndustryCard = ({ industry, index }) => {
  const IconComponent = Icons[industry.iconName] || Icons.Building;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative p-5 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300 shrink-0">
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
          {industry.name}
        </h3>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed mb-3">
        {industry.description}
      </p>
      <div className="text-[10px] font-mono font-semibold text-cyan-400/90 pt-2 border-t border-white/5">
        {industry.stats}
      </div>
    </motion.div>
  );
};
