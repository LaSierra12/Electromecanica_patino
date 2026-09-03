import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecialtiesScope from './components/SpecialtiesScope';
import WorkshopGallery from './components/WorkshopGallery';
import ServicesCatalog from './components/ServicesCatalog';
import BrandsSection from './components/BrandsSection';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import QuickCallBar from './components/QuickCallBar';
import WhatsAppBookingModal from './components/WhatsAppBookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBooking = (serviceName = "") => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Sección de Especialidades (Comentada para futuro uso si fuera necesario) */}
        {/* <SpecialtiesScope onOpenBooking={() => handleOpenBooking()} /> */}

        <WorkshopGallery />
        <ServicesCatalog onSelectService={(serviceTitle) => handleOpenBooking(serviceTitle)} />
        <BrandsSection />
        <LocationHours onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick Bar */}
      <QuickCallBar onOpenBooking={() => handleOpenBooking()} />

      {/* WhatsApp Budget Request Modal */}
      <WhatsAppBookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}
