import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import logoImg from '../assets/logo/logo-electromecanica-patino.svg';
import taller1 from '../assets/taller/taller-instalaciones-1.jpg';
import taller2 from '../assets/taller/taller-instalaciones-2.jpeg';

export default function WorkshopGallery() {
  const galleryImages = [
    { id: 1, src: logoImg, alt: "Logo Oficial Electromecánica Patiño S Coop", isLogo: true },
    { id: 2, src: taller1, alt: "Instalaciones de Electromecánica Patiño 1", isLogo: false },
    { id: 3, src: taller2, alt: "Instalaciones de Electromecánica Patiño 2", isLogo: false }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const currentImage = galleryImages[currentIndex];

  return (
    <section id="instalaciones" className="py-12 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Section Header */}
        <div className="text-center space-y-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200 inline-flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            Galería del Taller
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Nuestras Instalaciones
          </h2>
          {/*<p className="text-slate-600 text-xs">
            Imágenes de nuestro taller.
          </p>*/}
        </div>

        {/* Clean Photo Carousel Container */}
        <div className="relative rounded-xl bg-white border border-slate-200 overflow-hidden shadow-lg group">
          <div className="relative aspect-[16/9] w-full bg-slate-50 flex items-center justify-center overflow-hidden">
            
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={`w-full h-full transition-all duration-500 ${
                currentImage.isLogo 
                  ? 'object-contain p-8 sm:p-14 bg-white' 
                  : 'object-cover'
              }`}
            />

            {/* Image Counter Indicator */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 text-white border border-slate-700 text-[11px] font-semibold z-10">
              {currentIndex + 1} / {galleryImages.length}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'bg-sky-600 w-5'
                      : 'bg-slate-400 hover:bg-slate-600'
                  }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-slate-800 border border-slate-300 hover:bg-sky-600 hover:text-white transition-colors shadow-md z-20"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-slate-800 border border-slate-300 hover:bg-sky-600 hover:text-white transition-colors shadow-md z-20"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
