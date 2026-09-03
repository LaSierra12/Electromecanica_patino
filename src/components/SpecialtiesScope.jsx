import React from 'react';
import { Car, Truck, Cpu, Zap } from 'lucide-react';

export default function SpecialtiesScope({ onOpenBooking }) {
  return (
    <section id="especialidades" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200">
            Especialidad Técnica
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Nuestras Especialidades
          </h2>
          <p className="text-slate-600 text-xs">
            Trato directo, profesional y cercano adaptado a cada tipo de vehículo.
          </p>
        </div>

        {/* 2 Specialties Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Turismos */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                <Car className="w-5 h-5" />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-sky-100 text-sky-800 border border-sky-200">
                Turismos
              </span>
            </div>
            
            <h3 className="text-base font-bold text-slate-900">Electrónica & Mecánica para Turismos</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Solución de averías electrónicas y mantenimiento de mecánica general para turismos.
            </p>
            
            <div className="pt-2 text-[11px] text-sky-700 font-bold flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>Electrónica y Mecánica integral</span>
            </div>
          </div>

          {/* Card 2: Vehículos Pesados */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Truck className="w-5 h-5" />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-200">
                Vehículos Pesados
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900">Electricidad para Vehículos Pesados</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Servicios de electricidad especializada para vehículos pesados.
            </p>

            <div className="pt-2 text-[11px] text-emerald-700 font-bold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Electricidad especializada</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
