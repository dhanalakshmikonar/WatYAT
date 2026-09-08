import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Send, Upload } from 'lucide-react';
import * as Icons from 'lucide-react';

/* Service Details Modal */
export const ServiceModal = ({ service, onClose, onOpenContact }) => {
  if (!service) return null;
  const IconComponent = Icons[service.iconName] || Icons.Code;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">{service.badge || 'Enterprise Solution'}</span>
            <h2 className="text-2xl font-extrabold text-white">{service.title}</h2>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {service.fullDescription || service.shortDescription}
        </p>

        {/* Capabilities list */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-wider">Key Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.capabilities?.map((cap, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business benefits */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-wider">Business Impact</h3>
          <ul className="space-y-2 text-xs text-slate-300">
            {service.businessBenefits?.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack badges */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-slate-400 mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {service.techExamples?.map((t, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">Ready to implement this solution for your organization?</p>
          <button
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* Project Details Modal */
export const ProjectModal = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">{project.category}</span>
        <h2 className="text-2xl font-extrabold text-white mt-1 mb-4">{project.title}</h2>

        {/* Metrics Bar */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-cyan-500/20 mb-6">
          {project.metrics?.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl font-extrabold text-cyan-400 font-mono">{m.value}</div>
              <div className="text-xs text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.fullDescription}
        </p>

        {/* Key Features */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-wider">Solution Features</h3>
          <div className="space-y-2">
            {project.features?.map((f, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-xl bg-slate-950/50 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-slate-400 mb-2">Tech Architecture</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((t, idx) => (
              <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-cyan-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={() => {
              onClose();
              if (onOpenContact) onOpenContact();
            }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm flex items-center gap-2"
          >
            <span>Build Similar Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* Job Application Modal */
export const ApplyModal = ({ job, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', phone: '', portfolio: '', cover: '' });

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you for applying for the <span className="text-cyan-300 font-semibold">{job.title}</span> position. Our HR talent acquisition team will review your resume and contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-slate-800 text-cyan-300 text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">{job.department} • {job.type}</span>
              <h2 className="text-xl font-bold text-white mt-1">Apply for {job.title}</h2>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-300 font-medium">Full Name *</label>
                <input
                  type="text"
                  required
                  value={applicant.name}
                  onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium">Email Address *</label>
                <input
                  type="email"
                  required
                  value={applicant.email}
                  onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                  placeholder="alex@domain.com"
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium">Phone Number</label>
                <input
                  type="tel"
                  value={applicant.phone}
                  onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                  placeholder="+1 (555) 019-2834"
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium">LinkedIn / Portfolio URL</label>
                <input
                  type="url"
                  value={applicant.portfolio}
                  onChange={(e) => setApplicant({ ...applicant, portfolio: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium">Cover Note / Experience Summary</label>
                <textarea
                  rows={3}
                  value={applicant.cover}
                  onChange={(e) => setApplicant({ ...applicant, cover: e.target.value })}
                  placeholder="Briefly highlight your relevant experience and key technical projects..."
                  className="w-full mt-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <span>Submit Application</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

/* Legal Terms Modal */
export const LegalModal = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        </h2>

        <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>
            Welcome to WatY AI Technologies ("WatY AI", "we", "us", or "our"). This document outlines our policy and standard operational guidelines governing client interactions, data privacy, and intellectual property.
          </p>
          <h3 className="text-sm font-semibold text-cyan-300">1. Data Confidentiality & Non-Disclosure</h3>
          <p>
            WatY AI Technologies strictly protects all client information, proprietary source code, database credentials, and business workflows under bilateral non-disclosure standards (NDA).
          </p>
          <h3 className="text-sm font-semibold text-cyan-300">2. Intellectual Property Rights</h3>
          <p>
            Upon full contract settlement, 100% of custom software artifacts, web applications, mobile codebases, and database schemas developed specifically for the client remain the sole intellectual property of the client.
          </p>
          <h3 className="text-sm font-semibold text-cyan-300">3. Infrastructure Security & Compliance</h3>
          <p>
            All cloud architecture, API integrations, and database deployments adhere to industry security standards (including OWASP, SSL 256-bit encryption, and multi-tenant isolation protocols).
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
