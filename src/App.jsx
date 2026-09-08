import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { TechBackgroundCanvas } from './components/ui/TechBackgroundCanvas';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceModal, ProjectModal, ApplyModal, LegalModal } from './components/ui/Modals';

export function App() {
  const [activePage, setActivePage] = useState('home');

  // Modal States
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Background Interactive Tech Canvas */}
      <TechBackgroundCanvas />

      {/* Main Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenContactModal={() => handleNavigate('contact')}
      />

      {/* Page Content Switcher */}
      <main className="relative z-10 min-h-[75vh]">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectService={(service) => setSelectedService(service)}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenContactModal={() => handleNavigate('contact')}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenContactModal={() => handleNavigate('contact')}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectService={(service) => setSelectedService(service)}
            onOpenContactModal={() => handleNavigate('contact')}
          />
        )}

        {activePage === 'careers' && (
          <CareersPage
            onApplyJob={(job) => setSelectedJob(job)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Interactive Overlays / Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={() => handleNavigate('contact')}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => handleNavigate('contact')}
      />

      <ApplyModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Corporate Footer */}
      <Footer
        setActivePage={handleNavigate}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />
    </div>
  );
}

export default App;
