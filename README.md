# 🚗 Electromecánica Patiño S Coop - Sitio Web Oficial

> Web oficial moderna, dinámica y responsiva para **Electromecánica Patiño S Coop**, taller de reparación especializado en electrónica, mecánica y electricidad situado en Los Garres (Murcia).

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/Licencia-Propietaria-emerald?style=flat-square)]()

---

## 📌 Datos Verídicos del Taller

- **Razón Social:** Electromecánica Patiño S Coop
- **Dirección:** Senda de los Garres, nº86, 30158 Los Garres (Murcia)
- **Horario:** Lunes a Viernes de 07:00 a 16:00 h
- **WhatsApp Directo:** [652 370 216](https://wa.me/34652370216)
- **Teléfono Fijo:** [968 073 759](tel:34968073759)
- **Email:** electromecanicapatino@gmail.com
- **Tarifas Oficiales:**
  - Hora de taller: 40 €/hora + IVA
  - Diagnosis de avería OBD: 25 €
- **Acreditaciones Oficiales:**
  - **ATRAMUR** (Asociación de Empresarios de Talleres de Reparación de Murcia)
  - **BlackTire** (Red de mecánica rápida y neumáticos - Grupo Soledad, Elche)

---

## ✨ Características Principales

1. **💻 Diseño Claro & Alto Contraste (Light Mode):**
   - Interfaz luminosa, limpia y accesible con la paleta cromática corporativa.
   - Resalte óptimo del logotipo oficial y elementos de marca.

2. **📱 Generador Interactivo de Presupuestos por WhatsApp:**
   - Permite al cliente solicitar presupuesto seleccionando servicios o escribiendo averías.
   - Incluye campos específicos para **Matrícula**, Tipo de Vehículo (Turismo / Vehículo Pesado), Marca/Modelo/Año y detalles del problema.
   - Formatea el mensaje sin emoticonos, utilizando un esquema limpio con guiones `-`.

3. **🛠️ Catálogo Desplegable de Servicios (33+ servicios oficiales):**
   - Buscador en tiempo real, filtrado dinámico y botón desplegable *"Ver lista completa de servicios"*.
   - Incluye precio transparente para la Diagnosis OBD (25 €).

4. **🔄 Carrusel Infinito de Marcas (Marquee Carousel):**
   - Tarjetas de marcas (*Ferrari, Porsche, John Deere, New Holland, Mercedes-Benz, Audi, BMW, IVECO, Scania, Bosch, Michelin, etc.*) con sus logotipos gráficos sobre fondo blanco.

5. **📸 Galería de Instalaciones:**
   - Carrusel de fotos de alta resolución del taller e imagen corporativa.

6. **🎯 SEO Local Avanzado:**
   - Metadatos optimizados y datos estructurados JSON-LD (`Schema.org/AutoRepair`) para posicionar en Google Search y Google Maps para búsquedas en Murcia y Los Garres.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** React 18
- **Bundler / Dev Server:** Vite 5
- **Estilos:** Tailwind CSS 3
- **Iconografía:** Lucide React
- **Datos Estructurados:** JSON-LD (`Schema.org/AutoRepair`)

---

## 🚀 Instalación y Desarrollo Local

### Requisitos previos
- [Node.js](https://nodejs.org/) v18+ y npm v9+

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/electromecanica-patino.git
cd electromecanica-patino
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
Accede en tu navegador a `http://localhost:5173/`.

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados para publicación en servidor web se generarán en la carpeta `dist/`.

---

## 📁 Estructura del Proyecto

```text
ELETROMECANICA_PATINO/
├── public/
│   ├── logo/                # Logo oficial y favicon
│   ├── taller/              # Fotos de instalaciones
│   ├── acreditaciones/      # Logos de ATRAMUR y BlackTire
│   └── marcas/              # SVGs/PNGs de marcas automotrices
├── src/
│   ├── assets/              # Archivos multimedia importados en componentes
│   ├── components/
│   │   ├── Navbar.jsx       # Barra superior y navegación principal
│   │   ├── Hero.jsx         # Portada principal con tarjetas y CTAs
│   │   ├── WorkshopGallery.jsx # Carrusel de fotos del taller
│   │   ├── ServicesCatalog.jsx # Listado compacto desplegable de servicios
│   │   ├── BrandsSection.jsx   # Acreditaciones y carrusel infinito de logos
│   │   ├── LocationHours.jsx   # Mapa Google Maps, datos y redes sociales
│   │   ├── Footer.jsx          # Pie de página con créditos de desarrollo
│   │   ├── QuickCallBar.jsx    # Barra flotante móvil para llamadas/WhatsApp
│   │   └── WhatsAppBookingModal.jsx # Formulario interactivo con campo Matrícula
│   ├── data/
│   │   ├── workshopData.js  # Información corporativa y horarios
│   │   ├── servicesData.js  # Catálogo oficial de servicios (33+ ítems)
│   │   └── brandsData.js    # Lista e importaciones de marcas
│   ├── App.jsx              # Estructura de la aplicación
│   ├── main.jsx             # Punto de entrada de React
│   └── index.css            # Estilos globales y keyframes del marquee
├── index.html               # Plantilla HTML con SEO y JSON-LD
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
└── README.md                # Documentación del proyecto
```

---

## 💻 Créditos & Desarrollo Web

Este sitio web ha sido diseñado y desarrollado a medida para **Electromecánica Patiño S Coop**.

¿Quieres una página web profesional, rápida y optimizada como esta para tu empresa o negocio?  
✉️ **Contacta para servicios de desarrollo web:** [lsierraj12@gmail.com](mailto:lsierraj12@gmail.com)

---

## 📄 Licencia

© Electromecánica Patiño S Coop. Todos los derechos reservados.
