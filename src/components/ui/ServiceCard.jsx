import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import * as Icons from 'lucide-react';

export const ServiceCard = ({ service, index, onSelectService }) => {
  const IconComponent = Icons[service.iconName] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-white/10 p-7 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Soft Glow Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Top Header Badge & Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 group-hover:scale-105 transition-all duration-300 shadow-md">
            <IconComponent className="w-7 h-7" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-cyan-300">
              {service.badge}
            </span>
          )}
        </div>

        {/* Service Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Feature Highlights */}
        {service.capabilities && (
          <ul className="space-y-2 mb-6">
            {service.capabilities.slice(0, 3).map((cap, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="line-clamp-1">{cap}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {service.techExamples.slice(0, 3).map((t, idx) => (
            <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => onSelectService(service)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-200 group/btn transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
