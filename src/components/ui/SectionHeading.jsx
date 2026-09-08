import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`space-y-4 max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,240,255,0.15)] ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>{badge}</span>
        </div>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
