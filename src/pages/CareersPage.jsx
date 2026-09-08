import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Send, CheckCircle2, UserCheck } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { jobListings } from '../data/careersData';

export const CareersPage = ({ onApplyJob }) => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [spontaneousSubmitted, setSpontaneousSubmitted] = useState(false);
  const [spontaneousEmail, setSpontaneousEmail] = useState('');

  const departments = ['All', 'Engineering', 'Cloud & Infrastructure', 'Marketing & Strategy', 'Sales & Growth', 'AI Innovations'];

  const filteredJobs = selectedDept === 'All'
    ? jobListings
    : jobListings.filter((j) => j.department === selectedDept);

  const handleSpontaneousSubmit = (e) => {
    e.preventDefault();
    if (spontaneousEmail.trim()) {
      setSpontaneousSubmitted(true);
    }
  };

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
            <span>Join Our Global Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6"
          >
            Build the Future <span className="text-gradient">With Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Work on cutting-edge AI models, enterprise cloud platforms, high-performance web systems, and data growth strategy alongside world-class engineers.
          </motion.p>

          {/* Department Filter Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedDept === dept
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Current Openings"
          title="Explore Available Career Roles"
          subtitle="We offer competitive salaries, remote work flexibility, continuous learning stipends, and rapid career progression."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{job.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{job.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Exp: {job.experience}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono text-slate-400 mb-2">REQUIRED SKILLS:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 border border-white/5 text-cyan-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Competitive Equity & Benefits</span>
                <button
                  onClick={() => onApplyJob(job)}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spontaneous Resume Submission Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 text-center space-y-6 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
            <UserCheck className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Don't see your role? Send us your resume.
          </h2>

          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            We are always scouting for extraordinary talent in full-stack engineering, AI research, cloud architecture, and marketing growth. Drop your email below and our recruitment team will reach out.
          </p>

          {spontaneousSubmitted ? (
            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 max-w-md mx-auto">
              <CheckCircle2 className="w-4 h-4" />
              <span>Resume request noted! We will contact you when a matching role opens.</span>
            </div>
          ) : (
            <form onSubmit={handleSpontaneousSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={spontaneousEmail}
                onChange={(e) => setSpontaneousEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3 rounded-full bg-slate-950 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 flex items-center justify-center gap-2"
              >
                <span>Submit CV</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
