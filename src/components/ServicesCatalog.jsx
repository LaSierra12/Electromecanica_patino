import React from 'react';
import { MINIMAL_SERVICES_LIST } from '../data/servicesData';

export default function ServicesCatalog() {
  return (
    <section id="servicios" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Minimalist Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200">
            Nuestros Servicios
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            ELECTROMECÁNICA PATIÑO S.COOP.
          </h2>
        </div>

        {/* Clean 5 Services Grid (Only SVG Icons + Name, No descriptions, No buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MINIMAL_SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-center gap-4 transition-all hover:border-sky-300 hover:shadow-md"
            >
              {/* SVG Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-2.5 shrink-0">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                {service.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
