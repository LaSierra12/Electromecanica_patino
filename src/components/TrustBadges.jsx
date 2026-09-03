import React from 'react';
import { Award, ShieldCheck, Cpu, Clock, CheckCircle } from 'lucide-react';
import { SPECIAL_SPONSORS } from '../data/brandsData';

export default function TrustBadges() {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Badge 1: Electromecánica */}
          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/40 transition-colors space-y-3">
            <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Especialistas Electromecánicos</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Taller dedicado a la diagnosis avanzada y solución de averías electrónicas complejas que requieren conocimientos de precisión.
            </p>
          </div>

          {/* Badge 2: GRETAMUR */}
          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors space-y-3">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Miembros de GRETAMUR</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Formamos parte del Gremio Regional de Automoción de Murcia, garantizando máxima ética profesional y cumplimiento normativo.
            </p>
          </div>

          {/* Badge 3: Red Blacktire */}
          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/40 transition-colors space-y-3">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Red Oficial Blacktire</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Taller asociado a la red nacional Blacktire. Neumáticos multimarca de primera calidad y garantía en cada servicio.
            </p>
          </div>

          {/* Badge 4: Horario Continuo */}
          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors space-y-3">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Horario de 07:00 a 16:00 h</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Jornada continuada de mañana para que dejes tu coche antes de entrar a trabajar y lo recojas sin perder el día.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
