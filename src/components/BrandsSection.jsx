import React from 'react';
import { BRANDS_CAROUSEL } from '../data/brandsData';
import { Award, ShieldCheck } from 'lucide-react';
import atramurImg from '../assets/acreditaciones/atramur-logo.png';
import blacktireImg from '../assets/acreditaciones/blacktire-logo.svg';

export default function BrandsSection() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...BRANDS_CAROUSEL, ...BRANDS_CAROUSEL];

  return (
    <section id="acreditaciones" className="py-12 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
            Acreditaciones & Entidades Oficiales
          </span>
          
        </div>

        {/* ATRAMUR & BlackTire Cards with Clean White Logo Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* ATRAMUR Card */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-14 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center">
                  <img src={atramurImg} alt="ATRAMUR Logo" className="h-9 sm:h-10 object-contain" />
                </div>
                <span className="text-[10px] text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200 font-bold">
                  Asociación Oficial
                </span>
              </div>
              
              <h3 className="text-sm font-bold text-slate-900">Asociación de Empresarios de Talleres de Reparación</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Formamos parte de ATRAMUR, entidad que agrupa a talleres y concesionarios con el objetivo de representar, defender y promocionar los intereses profesionales del sector.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-amber-700 font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>Taller asociado a la patronal de automoción de Murcia</span>
            </div>
          </div>

          {/* BlackTire Card */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-14 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center">
                  <img src={blacktireImg} alt="BlackTire Logo" className="h-9 sm:h-10 object-contain" />
                </div>
                <span className="text-[10px] text-sky-800 bg-sky-100 px-2.5 py-1 rounded-full border border-sky-200 font-bold">
                  Grupo Soledad
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900">Red Española de Mecánica Rápida y Neumáticos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Red fundada en 2012 que opera bajo Neumáticos Soledad, S.L. (Grupo Soledad, Elche). Nos respalda la mayor red de talleres independientes de neumáticos del país.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-sky-700 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Garantía nacional en neumáticos y componentes</span>
            </div>
          </div>

        </div>

        {/* Dynamic Infinite Marquee Carousel */}
        <div className="space-y-3 pt-4">
          <div className="text-center text-xs text-slate-600 font-medium">
            Experiencia y diagnosis multimarca para los principales fabricantes
          </div>

          {/* Marquee Wrapper */}
          <div className="relative w-full overflow-hidden py-6 bg-slate-100/80 rounded-xl border border-slate-200 shadow-inner">
            {/* Fade Edges Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee gap-6">
              {marqueeItems.map((brand, idx) => (
                <div
                  key={idx}
                  className="h-20 sm:h-24 px-8 py-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-md hover:scale-105 transition-transform"
                >
                  {/* Extra Large Brand Image Logo */}
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 sm:h-16 max-w-[180px] sm:max-w-[220px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
