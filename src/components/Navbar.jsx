import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, MapPin, Clock } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';
import logoImg from '../assets/logo/logo-electromecanica-patino.svg';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200 transition-all text-xs">
      
      {/* Top Thin Notification Bar (Light theme) */}
      <div className="bg-slate-100/90 text-slate-700 py-1 px-4 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] w-full sm:w-auto justify-between sm:justify-start">
            <span className="flex items-center gap-1 text-sky-700 font-medium">
              <MapPin className="w-3 h-3 text-sky-600" />
              {WORKSHOP_INFO.address.street}, {WORKSHOP_INFO.address.locality} ({WORKSHOP_INFO.address.city})
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <Clock className="w-3 h-3 text-amber-600" />
              {WORKSHOP_INFO.schedule.days} {WORKSHOP_INFO.schedule.hours}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 ml-auto text-[11px] text-slate-600 font-medium">
            <span>{WORKSHOP_INFO.values.motto}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          
          {/* Official Logo Image */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shadow-sm group-hover:border-sky-500 transition-colors">
              <img src={logoImg} alt="ELECTROMECÁNICA PATIÑO S.COOP. Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                ELECTROMECÁNICA <span className="text-sky-600">PATIÑO S.COOP.</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium -mt-0.5">
                Los Garres · Murcia
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Servicios antes que Instalaciones) */}
          <nav className="hidden md:flex items-center gap-5 font-semibold text-slate-700">
            <a href="#inicio" className="hover:text-sky-600 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-sky-600 transition-colors">Servicios</a>
            <a href="#instalaciones" className="hover:text-sky-600 transition-colors">Instalaciones</a>
            <a href="#acreditaciones" className="hover:text-sky-600 transition-colors">Acreditaciones</a>
            <a href="#contacto" className="hover:text-sky-600 transition-colors">Ubicación</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a 
              href={`tel:${WORKSHOP_INFO.phoneWhatsApp}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-300 transition-colors text-[11px]"
              title="Llamar directamente"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{WORKSHOP_INFO.phoneDisplayWhatsApp}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
              <span>Pedir Presupuesto</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={onOpenBooking}
              className="px-2.5 py-1 rounded bg-emerald-600 text-white font-bold text-[11px]"
            >
              Presupuesto
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded bg-slate-100 text-slate-700 border border-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2 text-xs">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-800 font-medium">Inicio</a>
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-800 font-medium">Servicios</a>
          <a href="#instalaciones" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-800 font-medium">Instalaciones</a>
          <a href="#acreditaciones" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-800 font-medium">Acreditaciones</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-800 font-medium">Ubicación</a>
          
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-1.5">
            <a href={`tel:${WORKSHOP_INFO.phoneWhatsApp}`} className="py-2 text-center rounded bg-sky-600 text-white font-bold">
              Llamar al {WORKSHOP_INFO.phoneDisplayWhatsApp}
            </a>
            <button onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }} className="py-2 rounded bg-emerald-600 text-white font-bold">
              Solicitar Presupuesto WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
