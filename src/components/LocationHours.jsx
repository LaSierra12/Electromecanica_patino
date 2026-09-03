import React from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, MessageSquare, Navigation } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export default function LocationHours({ onOpenBooking }) {
  return (
    <section id="contacto" className="py-12 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 border border-sky-200">
            Ubicación & Contacto Directo
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Estamos en Senda de los Garres, nº26 (Murcia)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Info Details Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-4 text-xs shadow-md">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs">Dirección del Taller</h3>
                  <p className="text-slate-700 font-medium">{WORKSHOP_INFO.address.street}</p>
                  <p className="text-slate-500">{WORKSHOP_INFO.address.zip} {WORKSHOP_INFO.address.locality}, Murcia</p>
                  <a
                    href={WORKSHOP_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-sky-700 font-bold mt-1 hover:underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Ver ruta en Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs">Horario de Atención</h3>
                  <p className="text-amber-800 font-bold">{WORKSHOP_INFO.schedule.days}: {WORKSHOP_INFO.schedule.hours}</p>
                  <p className="text-slate-500 text-[10px] font-medium">{WORKSHOP_INFO.schedule.weekend}</p>
                </div>
              </div>

              {/* Phones & Email */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-slate-900 text-xs">Contacto</h3>
                  <a href={`tel:${WORKSHOP_INFO.phoneWhatsApp}`} className="block text-emerald-700 font-bold hover:underline">
                    WhatsApp: {WORKSHOP_INFO.phoneDisplayWhatsApp}
                  </a>
                  <a href={`tel:${WORKSHOP_INFO.phoneLandline}`} className="block text-slate-700 hover:underline font-medium">
                    Fijo: {WORKSHOP_INFO.phoneDisplayLandline}
                  </a>
                  <a href={`mailto:${WORKSHOP_INFO.email}`} className="block text-sky-700 font-medium hover:underline pt-0.5">
                    {WORKSHOP_INFO.email}
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-3 border-t border-slate-200 flex items-center gap-2">
                <a
                  href={WORKSHOP_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white text-[11px] font-bold transition-all"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>

                <a
                  href={WORKSHOP_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-600 hover:text-white text-[11px] font-bold transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                <span>Pedir Presupuesto por WhatsApp</span>
              </button>

            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 h-full min-h-[350px]">
            <div className="w-full h-full min-h-[350px] rounded-xl bg-white border border-slate-200 overflow-hidden relative shadow-md">
              <iframe
                title="Ubicación Electromecánica Patiño"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.748392182046!2d-1.1123!3d37.9542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381f1d1d1d1d1%3A0x0!2sSenda+de+los+Garres%2C+26%2C+30158+Los+Garres%2C+Murcia!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
