import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';

export const ProjectCard = ({ project, index, onSelectProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-2xl"
    >
      {/* Top Banner / Image Visual Placeholder */}
      <div className={`relative h-48 w-full bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
        {/* Abstract Background Design Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-all" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-cyan-300">
            {project.category}
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-950/70 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all">
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>

        {/* Client Name Badge */}
        <div className="relative z-10">
          <p className="text-xs text-slate-400 font-mono">CLIENT</p>
          <p className="text-sm font-bold text-white tracking-wide">{project.client}</p>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-950/60 border border-white/5 mb-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-sm font-extrabold text-cyan-400 font-mono">{m.value}</div>
                <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Tags & Action */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20 text-cyan-300">
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelectProject(project)}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-slate-200 hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 hover:border-transparent group/btn"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
