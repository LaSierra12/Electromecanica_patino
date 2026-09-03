import React, { useState } from 'react';
import { OFFICIAL_SERVICES_LIST } from '../data/servicesData';
import { MessageSquare, Search, ChevronRight, Tag, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export default function ServicesCatalog({ onSelectService }) {
  const INITIAL_VISIBLE_COUNT = 8;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = ["Todas", ...new Set(OFFICIAL_SERVICES_LIST.map(s => s.category))];

  const filteredServices = OFFICIAL_SERVICES_LIST.filter(service => {
    const matchesCategory = selectedCategory === "Todas" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Automatically show all results when searching or filtering by category,
  // or slice to initial count when browsing the full default list.
  const isFiltering = searchTerm.trim() !== "" || selectedCategory !== "Todas";
  const displayedServices = isFiltering || isExpanded 
    ? filteredServices 
    : filteredServices.slice(0, INITIAL_VISIBLE_COUNT);

  const remainingCount = filteredServices.length - INITIAL_VISIBLE_COUNT;

  return (
    <section id="servicios" className="py-10 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            Catálogo de Servicios
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-slate-600 text-xs">
            Haz clic en cualquier servicio para pedir presupuesto por WhatsApp al instante.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-100 p-3 rounded-xl border border-slate-200">
          
          {/* Section Category Pills */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsExpanded(true); // Expand automatically when clicking a category
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar servicio..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsExpanded(true);
              }}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-600 shadow-sm font-medium"
            />
          </div>

        </div>

        {/* Compact List View */}
        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-200 overflow-hidden shadow-sm">
          {displayedServices.map((service, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              
              {/* Left Info */}
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <strong className="text-slate-900 font-extrabold text-xs sm:text-sm">{service.name}</strong>
                  <span className="text-[10px] font-bold text-sky-800 px-2 py-0.5 rounded bg-sky-100 border border-sky-200">
                    {service.category}
                  </span>
                  {service.price && (
                    <span className="text-[11px] font-extrabold text-emerald-700 px-2 py-0.5 rounded bg-emerald-100 border border-emerald-200 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-emerald-600" />
                      {service.price}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed max-w-3xl">
                  {service.desc}
                </p>
              </div>

              {/* Right Action Button */}
              <button
                onClick={() => onSelectService(service.name)}
                className="shrink-0 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-600 text-slate-800 hover:text-white border border-slate-300 hover:border-emerald-600 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                <span>Pedir Presupuesto</span>
                <ChevronRight className="w-3 h-3 opacity-60" />
              </button>

            </div>
          ))}
        </div>

        {/* Load More / Collapse Button */}
        {!isFiltering && filteredServices.length > INITIAL_VISIBLE_COUNT && (
          <div className="text-center pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-extrabold text-xs border border-sky-200 shadow-sm transition-all hover:scale-[1.02]"
            >
              {isExpanded ? (
                <>
                  <span>Mostrar menos servicios</span>
                  <ChevronUp className="w-4 h-4 text-sky-600" />
                </>
              ) : (
                <>
                  <Layers className="w-4 h-4 text-sky-600" />
                  <span>Ver lista completa de servicios (+{remainingCount} más)</span>
                  <ChevronDown className="w-4 h-4 text-sky-600" />
                </>
              )}
            </button>
          </div>
        )}

        {filteredServices.length === 0 && (
          <div className="text-center py-8 text-slate-500 text-xs font-medium">
            No se encontraron servicios que coincidan con "{searchTerm}".
          </div>
        )}

      </div>
    </section>
  );
}
