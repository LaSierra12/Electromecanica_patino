import React from 'react';
import { MessageSquare, Phone, MapPin, Clock, ShieldCheck, HeartHandshake, CheckCircle2, Zap } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';
import logoImg from '../assets/logo/logo-electromecanica-patino.svg';
import atramurImg from '../assets/acreditaciones/atramur-logo.png';
import blacktireImg from '../assets/acreditaciones/blacktire-logo.svg';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="inicio" className="relative py-10 sm:py-14 bg-slate-50 overflow-hidden border-b border-slate-200">
      
      {/* Background Subtle Light Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Main Hero Text */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Main Featured Large Image Box */}
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl border border-slate-200 flex items-center justify-center overflow-hidden transform hover:scale-[1.01] transition-transform">
              <img
                src={logoImg}
                alt="Electromecánica Patiño S Coop - Logo Principal"
                className="w-full h-36 sm:h-44 object-contain"
              />
            </div>

            {/* Value Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800 border border-sky-200">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                Responsabilidad & Profesionalidad
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
                Trato Cercano y Personalizado
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Electromecánica Patiño S Coop
            </h1>

            {/* Subtitle with exact specialties */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl">
              Taller especializado en <strong className="text-slate-900 font-bold">Electrónica y Mecánica</strong> para turismos, y <strong className="text-sky-700 font-bold">Electricidad técnica</strong> para vehículos pesados.
            </p>

            {/* Highlights list */}
            <div className="space-y-1.5 pt-1 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atención transparente con presupuesto previo por WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Compromiso de calidad en cada reparación</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white/20" />
                <span>Pedir Presupuesto por WhatsApp</span>
              </button>

              <a
                href={`tel:${WORKSHOP_INFO.phoneWhatsApp}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-300 shadow-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Llamar al {WORKSHOP_INFO.phoneDisplayWhatsApp}</span>
              </a>
            </div>

          </div>

          {/* Right Compact Workshop Card */}
          <div className="lg:col-span-5">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-md space-y-4 text-xs">
              
              {/* Experience Card Block */}
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                <p className="leading-relaxed">
                  <strong className="text-slate-900 font-extrabold">Más de 15 años de experiencia</strong> en el sector de la reparación de vehículos. Estamos en continua formación y siempre al día de las novedades en el mundo del automóvil.
                </p>
                <div className="flex items-center gap-2 pt-1 font-bold text-sky-800 text-xs border-t border-slate-200/80">
                  <Zap className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
                  <span>Reparamos tu vehículo de forma rápida y eficaz.</span>
                </div>
              </div>

              {/* Address, Hours & Phones */}
              <div className="space-y-2.5 text-slate-700 font-medium pt-1">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Senda de los Garres, nº86, 30158 Los Garres (Murcia)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{WORKSHOP_INFO.schedule.days}: <strong className="text-amber-800">{WORKSHOP_INFO.schedule.hours}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Teléfonos: {WORKSHOP_INFO.phoneDisplayWhatsApp} / {WORKSHOP_INFO.phoneDisplayLandline}</span>
                </div>
              </div>

              {/* Accreditations Logos Container */}
              <div className="p-3 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-around gap-4">
                <img src={atramurImg} alt="ATRAMUR Logo" className="h-6 object-contain" />
                <div className="h-6 w-px bg-slate-300" />
                <img src={blacktireImg} alt="BlackTire Logo" className="h-6 object-contain" />
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow transition-colors text-center"
              >
                Solicitar Presupuesto sin Compromiso
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
