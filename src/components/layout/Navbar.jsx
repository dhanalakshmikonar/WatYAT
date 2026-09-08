import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

export const Navbar = ({ activePage, setActivePage, onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F17]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-400/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-xl tracking-wider">
                  W
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  WatY <span className="text-cyan-400">AI</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  TECH
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider font-medium uppercase -mt-0.5">
                Technologies
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 backdrop-blur-md border border-white/5 px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_#00F0FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Prominent "Get Started" CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                setActivePage('contact');
                if (onOpenContactModal) onOpenContactModal();
              }}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-full group-hover:opacity-90 transition-opacity" />
              <span className="relative px-5 py-2.5 rounded-full bg-[#0D1322] group-hover:bg-transparent transition-all duration-300 flex items-center gap-2 text-white">
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:animate-spin" />
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#0B0F17]/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                </button>
              );
            })}

            <div className="pt-4 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActivePage('contact');
                  if (onOpenContactModal) onOpenContactModal();
                }}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Get Started - Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
