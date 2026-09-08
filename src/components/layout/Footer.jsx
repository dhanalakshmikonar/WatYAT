import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Shield, FileText, Sparkles, Heart } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { servicesData } from '../../data/servicesData';

export const Footer = ({ setActivePage, onOpenLegalModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070A11] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Company Branding Column */}
          <div className="lg:col-span-2 space-y-5">
            <div
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#070A11] rounded-[10px] flex items-center justify-center">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-xl">
                    W
                  </span>
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                WatY <span className="text-cyan-400">AI</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              WatY AI Technologies is an enterprise technology solutions provider. We architect scalable web platforms, native mobile applications, cloud infrastructures, and automated AI systems for market leaders.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{companyInfo.tagline}</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              {companyInfo.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200"
                  aria-label={s.name}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase text-xs text-cyan-400">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About Us', 'Services', 'Careers', 'Contact'].map((item) => {
                const pageId = item.toLowerCase().replace(' ', '').replace('us', '');
                const targetId = pageId === 'about' ? 'about' : pageId;
                return (
                  <li key={item}>
                    <button
                      onClick={() => {
                        setActivePage(targetId);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 group"
                    >
                      <span>{item}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase text-xs text-cyan-400">
              Solutions & Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => {
                      setActivePage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-cyan-300 transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase text-xs text-cyan-400">
              Corporate Office
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span>{companyInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-cyan-300 transition-colors">
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{companyInfo.contact.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} WatY AI Technologies. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegalModal && onOpenLegalModal('privacy')}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => onOpenLegalModal && onOpenLegalModal('terms')}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
