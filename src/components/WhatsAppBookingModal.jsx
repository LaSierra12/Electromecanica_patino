import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, User, FileSpreadsheet } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';
import { OFFICIAL_SERVICES_LIST } from '../data/servicesData';

export default function WhatsAppBookingModal({ isOpen, onClose, initialService = "" }) {
  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");
  const [clientName, setClientName] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState("");
  const [userNotes, setUserNotes] = useState("");

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceName = selectedService === "Otro (Especificar)" 
      ? customService || "Consulta / Presupuesto General" 
      : selectedService || "Consulta General / Presupuesto";

    const lines = [
      `Solicitud de Presupuesto - ELECTROMECÁNICA PATIÑO S.COOP.`,
      `- Nombre: ${clientName.trim() || 'No especificado'}`,
      `- Matrícula: ${licensePlate.trim().toUpperCase() || 'No especificada'}`,
      `- Vehículo (Marca/Modelo/Año): ${vehicleDetails.trim() || 'No especificado'}`,
      `- Servicio / Reparación: ${serviceName}`,
      `- Detalles adicionales: ${userNotes.trim() || 'Ninguno'}`
    ];

    const messageText = lines.join('\n');
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${WORKSHOP_INFO.phoneWhatsApp}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden text-xs text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <MessageSquare className="w-4 h-4 fill-white/20" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white">Solicitar Presupuesto WhatsApp</h3>
              <p className="text-[10px] text-slate-300">ELECTROMECÁNICA PATIÑO S.COOP.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3 bg-white">

          {/* Service Dropdown */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-800">Servicio Requerido</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-600 font-medium"
            >
              <option value="">-- Selecciona un servicio --</option>
              {OFFICIAL_SERVICES_LIST.map((serv, idx) => (
                <option key={idx} value={serv.name}>
                  {serv.name}
                </option>
              ))}
              <option value="Otro (Especificar)">Otro servicio (Especificar)</option>
            </select>
          </div>

          {/* Custom service write-in */}
          {selectedService === "Otro (Especificar)" && (
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-slate-800">Especificar Servicio</label>
              <input
                type="text"
                placeholder="Ej. Cambio de embrague o ruido extraño..."
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
                className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-600 font-medium"
              />
            </div>
          )}

          {/* Client Name & License Plate Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            
            {/* Client Name */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-slate-800">Tu Nombre</label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Nombre y apellidos"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full pl-8 pr-2 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-600 font-medium"
                />
              </div>
            </div>

            {/* License Plate (Matrícula) */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-slate-800">Matrícula</label>
              <div className="relative">
                <FileSpreadsheet className="w-3.5 h-3.5 text-sky-600 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Ej. 1234 ABC"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  className="w-full pl-8 pr-2 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs uppercase focus:outline-none focus:border-sky-600 font-bold tracking-wider"
                />
              </div>
            </div>

          </div>

          {/* Vehicle Details */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-800">Marca / Modelo / Año (Opcional)</label>
            <input
              type="text"
              placeholder="Ej. Seat Ibiza 2018 / Renault Megane"
              value={vehicleDetails}
              onChange={(e) => setVehicleDetails(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-600 font-medium"
            />
          </div>

          {/* Additional Notes */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-slate-800">Comentarios o Detalles del Problema</label>
            <textarea
              rows="2"
              placeholder="Describe los síntomas o lo que necesitas consultar..."
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-sky-600 font-medium resize-none"
            />
          </div>

          {/* Notice */}
          <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-800 font-medium">
            Al pulsar el botón se abrirá WhatsApp con los datos formateados sin compromisos.
          </div>

          {/* Action button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Enviar Mensaje por WhatsApp</span>
          </button>

        </form>

      </div>
    </div>
  );
}
