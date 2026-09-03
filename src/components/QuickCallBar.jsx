import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export default function QuickCallBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 p-2 sm:hidden shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto text-xs">
        <a
          href={`tel:${WORKSHOP_INFO.phoneWhatsApp}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold border border-slate-300 transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-600" />
          <span>Llamar</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow"
        >
          <MessageSquare className="w-4 h-4 fill-white/20" />
          <span>Presupuesto</span>
        </button>
      </div>
    </div>
  );
}
