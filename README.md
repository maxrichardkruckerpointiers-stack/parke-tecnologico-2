# 🌴 Cartagena Tech Hub | Web3 Ecosystem

![Status](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-purple)

> **Plataforma de aterrizaje oficial para el Parque Tecnológico de Cartagena.**  
> Un ecosistema digital diseñado para atraer startups, capital de riesgo y talento especializado en tecnologías descentralizadas al corazón del Caribe.

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Stack Tecnológico](#-stack-tecnológico)
- [Identidad Visual & UI/UX](#-identidad-visual--uiux)
- [Características Principales](#-características-principales)
- [Instalación y Uso](#-instalación-y-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribución](#-contribución)

---

## 🚀 Sobre el Proyecto

**Cartagena Tech Hub** es una Single Page Application (SPA) desarrollada con un enfoque *mobile-first* y orientada a la conversión. Su objetivo es posicionar a Cartagena no solo como destino turístico, sino como un nodo emergente de innovación tecnológica y Web3 en Latinoamérica.

La aplicación combina una estética futurista (Dark Mode, Neumorfismo sutil, Gradientes) con la calidez del Caribe, utilizando una arquitectura de componentes moderna y ligera.

---

## 🛠 Stack Tecnológico

El proyecto utiliza tecnologías modernas de frontend sin necesidad de bundlers complejos para este entorno de desarrollo, aprovechando **ES Modules** y **CDN** para una carga rápida y prototipado ágil.

*   **Core:** [React 19](https://react.dev/) (via ESM)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Motor de utilidades)
*   **Iconografía:** [Lucide React](https://lucide.dev/)
*   **Tipografía:** [Google Fonts](https://fonts.google.com/) (Inter & Space Grotesk)

---

## 🎨 Identidad Visual & UI/UX

El diseño sigue una filosofía de **"Tropical Cyberpunk"**, fusionando elementos orgánicos con tecnología de punta.

### Paleta de Colores
La configuración de Tailwind se ha personalizado con tokens semánticos:

| Token | Color | Hex | Uso |
| :--- | :--- | :--- | :--- |
| `cartagena-dark` | Navy Deep | `#0a192f` | Fondo principal, elegancia y profundidad. |
| `cartagena-teal` | Neon Cyan | `#64ffda` | Acciones primarias (CTA), enlaces, acentos Web3. |
| `cartagena-coral` | Sunset Orange | `#ee9b00` | Destacados cálidos, alertas, calidez humana. |
| `cartagena-sea` | Caribbean Blue | `#005f73` | Gradientes, fondos secundarios. |
| `cartagena-slate` | Tech Grey | `#112240` | Tarjetas, secciones de contenido, elevación. |

### Tipografía
*   **Space Grotesk:** Usada en encabezados para evocar tecnología y modernidad.
*   **Inter:** Usada en cuerpo de texto por su alta legibilidad en interfaces digitales.

---

## ✨ Características Principales

1.  **Navegación Inteligente:** Barra de navegación *Glassmorphic* que reacciona al scroll.
2.  **Secciones Interactivas:**
    *   **Hero:** Diseño split con integración visual abstracta de nodos/redes.
    *   **Web3 Dashboard:** Simulación visual de explorador de bloques y estado de red.
    *   **Proyectos:** Grid interactivo con efectos hover para descubrimiento de contenido.
3.  **Captura de Leads:** Formulario optimizado con validación de estado y feedback visual.
4.  **Micro-interacciones:** Animaciones CSS nativas (`pulse`, `fade-in`, `slide-up`) para mejorar la experiencia sin sacrificar rendimiento.
5.  **Sticky CTA:** Botón flotante persistente para maximizar la conversión en dispositivos móviles.

---

## 💻 Instalación y Uso

Este proyecto está diseñado para ejecutarse directamente en un navegador moderno o servirse estáticamente.

### Prerrequisitos
Cualquier servidor estático local (e.g., Live Server, http-server, python simple http server).

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/cartagena-tech-hub.git
    cd cartagena-tech-hub
    ```

2.  **Ejecutar servidor local:**
    No requiere `npm install` masivo ya que usa imports vía ESM.sh. Simplemente sirve la raíz:

    *Con Python:*
    ```bash
    python3 -m http.server 8000
    ```
    *Con Node (http-server):*
    ```bash
    npx http-server .
    ```

3.  **Visualizar:**
    Abre tu navegador en `http://localhost:8000`.

---

## 📂 Estructura del Proyecto

```text
/
├── components/          # Componentes React reutilizables
│   ├── Hero.tsx         # Sección principal
│   ├── Navbar.tsx       # Navegación responsive
│   ├── Web3Section.tsx  # Dashboard visual Web3
│   ├── ContactForm.tsx  # Lógica de formulario
│   └── ...
├── constants.tsx        # Textos, configuración y datos estáticos
├── types.ts             # Definiciones de interfaces TypeScript
├── App.tsx              # Componente raíz y orquestador de layout
├── index.tsx            # Punto de entrada de React
├── index.html           # Entry point, CDN links y Configuración Tailwind
└── metadata.json        # Metadatos del proyecto
```

---

## 🤝 Contribución

Las contribuciones son bienvenidas para expandir el ecosistema.

1.  Haz un Fork del proyecto.
2.  Crea tu rama de funcionalidad (`git checkout -b feature/AmazingFeature`).
3.  Commit a tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Push a la rama (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

---

<div align="center">
  <p>Desarrollado con 💙 y ⚡ en Cartagena de Indias</p>
  <p>© 2024 Cartagena Tech Hub</p>
</div>
