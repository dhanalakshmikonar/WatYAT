import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const StatCard = ({ stat, index }) => {
  const IconComponent = Icons[stat.icon] || Icons.CheckCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all" />
      
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 tracking-tight font-mono">
            {stat.number}
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-1 tracking-wide">
        {stat.label}
      </h3>
      <p className="text-xs text-slate-400 leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
};
