import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Sparkles, Building, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: '$10,000 - $25,000',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const serviceOptions = [
    'Web Development',
    'Application Development',
    'Cloud Services',
    'Digital Marketing',
    'AI Solutions',
    'IT Consulting',
    'Other'
  ];

  const budgetOptions = [
    '<$10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
      setError('Please fill in all required fields (Name, Email, and Project Details).');
      return;
    }

    setLoading(true);

    // Simulate real submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/40 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto animate-bounce">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Your project query has been received by the WatY AI Solutions team. One of our enterprise technology specialists will review your requirements and respond within <span className="text-cyan-300 font-semibold">24 hours</span>.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                service: 'Web Development',
                budget: '$10,000 - $25,000',
                details: ''
              });
            }}
            className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold transition-colors"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl relative">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-cyan-400" />
        <h3 className="text-xl font-extrabold text-white">Start Your Project</h3>
      </div>
      <p className="text-slate-400 text-xs leading-relaxed -mt-4">
        Fill out the details below for a customized technical strategy session & quotation.
      </p>

      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full Name <span className="text-cyan-400">*</span></span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sarah Jenkins"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
            required
          />
        </div>

        {/* Company */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-cyan-400" />
            <span>Company / Organization</span>
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Apex Global Corp"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Email Address <span className="text-cyan-400">*</span></span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="s.jenkins@company.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Phone Number</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 019-2834"
            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service Required Dropdown */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Service Required <span className="text-cyan-400">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-slate-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Estimated Budget */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">
            Estimated Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-slate-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          <span>Project Details & Objectives <span className="text-cyan-400">*</span></span>
        </label>
        <textarea
          name="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          placeholder="Briefly describe your project scope, target deadline, key functionality, or technological challenges..."
          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600 resize-none"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 disabled:opacity-50"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <span>Submit Proposal Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};
