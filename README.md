# Mercado Libre Frontend Challenge 🚀

![react-toolkit](https://img.shields.io/badge/React-Library-61DAFB?logo=react&logoColor=white)
![react-redux](https://img.shields.io/badge/React%20Redux-Library-764ABC?logo=redux&logoColor=white)
![node](https://img.shields.io/badge/Node.js-Runtime-339933?logo=node.js&logoColor=white)
![docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white)
![sass](https://img.shields.io/badge/Sass-CSS%20Preprocessor-CC6699?logo=sass&logoColor=white)
![production-ready](https://img.shields.io/badge/In%20Develop-Ready-green?logo=check&logoColor=white)

## 📖 Tabla de Contenidos

1. [Funcionalidades Principales](#Funcionalidades-Principales)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Endpoints API](#endpoints-api)
4. [Estructura del Proyecto](#estructura-del-proyecto)

---

##  Funcionalidades Principales 🎯


1. **Caja de Búsqueda**:
   - Permite al usuario buscar productos por nombre.
   - Navega a los resultados de la búsqueda al enviar el formulario.

2. **Resultados de la Búsqueda**:
   - Muestra una lista de hasta 4 productos obtenidos de la API de Mercado Libre.
   - Cada producto incluye:
     - Imagen
     - Nombre
     - Precio
     - Estado (nuevo/usado)
     - Indicación de envío gratis
   - Permite navegar al detalle de un producto al hacer clic en él.

3. **Detalle del Producto**:
   - Muestra información detallada del producto seleccionado:
     - Imagen
     - Nombre
     - Precio
     - Cantidad vendida
     - Descripción
     - Indicador de envío gratis y estado del producto

## 🛠️ Tecnologías Utilizadas

### Cliente
- **HTML5**
- **CSS3** (Sass para estilos estructurados y reutilizables)
- **JavaScript** (React para la gestión de componentes)

### Servidor
- **Node.js** 
- **Express** para la creación de endpoints de la API

### API Externa
- **Mercado Libre API**:
  

## 🚀 Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

### Requisitos Previos
- [Node.js](https://nodejs.org) (v16 o superior)
- [Git](https://git-scm.com/)


### Clonar el Repositorio
bash
git clone https://github.com/Danvar03/test_mercado_libre_frontend.git
cd test_mercado_libre_frontend


## 📁 Estructura del Proyecto

```bash
├── client/                 # Código del cliente (React)
├── server/                 # Código del servidor (Node.js y Express)
└── README.md               # Documentación del proyecto
```