import iconElectronica from '../assets/iconos-servicios/electronica-electricidad.svg';
import iconMecanica from '../assets/iconos-servicios/mecanica-general.svg';
import iconAire from '../assets/iconos-servicios/aire-acondicionado.svg';
import iconMultimedia from '../assets/iconos-servicios/radios-pantallas.svg';
import iconBaterias from '../assets/iconos-servicios/baterias-arranque.svg';

export const MINIMAL_SERVICES_LIST = [
  {
    id: 1,
    name: "Electrónica y electricidad",
    icon: iconElectronica
  },
  {
    id: 2,
    name: "Mecánica general",
    icon: iconMecanica
  },
  {
    id: 3,
    name: "Aire acondicionado",
    icon: iconAire
  },
  {
    id: 4,
    name: "Radio, pantallas, altavoces, sensores, cámaras, etc",
    icon: iconMultimedia
  },
  {
    id: 5,
    name: "Arranques, alternadores y baterías",
    icon: iconBaterias
  }
];

export const OFFICIAL_SERVICES_LIST = MINIMAL_SERVICES_LIST;
