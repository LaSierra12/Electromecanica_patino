import React from 'react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { Facebook, Instagram, Code } from 'lucide-react';
import logoImg from '../assets/logo/logo-electromecanica-patino.svg';
import atramurImg from '../assets/acreditaciones/atramur-logo.png';
import blacktireImg from '../assets/acreditaciones/blacktire-logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 text-[11px] border-t border-slate-800 pt-10 pb-20 sm:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shadow-sm">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-extrabold text-white tracking-tight">
                ELECTROMECÁNICA <span className="text-sky-400">PATIÑO S COOP</span>
              </span>
            </div>
            
            <p className="text-slate-300 leading-relaxed max-w-md">
              Especialistas en Electrónica y Mecánica para turismos, y Electricidad para vehículos pesados. Senda de los Garres, nº26, 30158 Los Garres, Murcia.
            </p>

            {/* Accreditations Image Logos in White Containers */}
            <div className="flex items-center gap-3 pt-1">
              <div className="bg-white px-2.5 py-1 rounded shadow-sm">
                <img src={atramurImg} alt="ATRAMUR" className="h-6 object-contain" />
              </div>
              <div className="bg-white px-2.5 py-1 rounded shadow-sm">
                <img src={blacktireImg} alt="BlackTire (Grupo Soledad)" className="h-6 object-contain" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-1 text-slate-300">
              <li><a href="#inicio" className="hover:text-sky-400 transition-colors">Inicio</a></li>
              <li><a href="#instalaciones" className="hover:text-sky-400 transition-colors">Instalaciones</a></li>
              <li><a href="#servicios" className="hover:text-sky-400 transition-colors">Catálogo de Servicios</a></li>
              <li><a href="#acreditaciones" className="hover:text-sky-400 transition-colors">Acreditaciones</a></li>
              <li><a href="#contacto" className="hover:text-sky-400 transition-colors">Ubicación</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contacto</h4>
            <p className="text-emerald-400 font-bold">WhatsApp: {WORKSHOP_INFO.phoneDisplayWhatsApp}</p>
            <p className="text-slate-300">Fijo: {WORKSHOP_INFO.phoneDisplayLandline}</p>
            <p className="text-sky-400">{WORKSHOP_INFO.email}</p>
            
            <div className="flex items-center gap-2 pt-1">
              <a href={WORKSHOP_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href={WORKSHOP_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Developer Credit & Contact */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-400">
          <p>© {currentYear} Electromecánica Patiño S Coop. Todos los derechos reservados.</p>
          
          {/* Professional Developer Credit */}
          <p className="flex items-center gap-1.5 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 text-slate-300">
            <Code className="w-3 h-3 text-sky-400" />
            <span>Diseño y Desarrollo Web:</span>
            <a 
              href="mailto:lsierraj12@gmail.com?subject=Consulta%20Servicios%20Desarrollo%20Web" 
              className="text-sky-400 font-bold hover:underline"
              title="Contactar para desarrollo web"
            >
              lsierraj12@gmail.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
