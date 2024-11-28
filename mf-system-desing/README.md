# Mercado Libre Frontend Challenge - Client

![react-toolkit](https://img.shields.io/badge/React-Library-61DAFB?logo=react&logoColor=white)
![react-redux](https://img.shields.io/badge/React%20Redux-Library-764ABC?logo=redux&logoColor=white)
![sass](https://img.shields.io/badge/Sass-CSS%20Preprocessor-CC6699?logo=sass&logoColor=white)
![vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-Language-3178C6?logo=typescript&logoColor=white)
![Module Federation](https://img.shields.io/badge/Module%20Federation-Microfrontend-blue)

## 📖 Tabla de Contenidos

1. [Funcionalidades Principales](#funcionalidades-principales)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Configuración del Sistema de Diseño](#configuración-del-sistema-de-diseño)
4. [Microfrontend y Module Federation](#microfrontend-y-module-federation)
5. [Instalación y Ejecución](#instalación-y-ejecución)
6. [Construcción del Proyecto](#construcción-del-proyecto)
7. [Guía para Crear la Imagen de Docker](#guía-para-crear-la-imagen-de-docker)

---

## 🎯 Funcionalidades Principales

1. **Sistema de Diseño:**

   - Contiene componentes reutilizables, diseñados siguiendo el patrón **Atomic Design**.
   - Modularidad y escalabilidad para proyectos basados en microfrontends.

2. **Microfrontend y Module Federation:**

   - Implementación de **Module Federation** para integrar múltiples microfrontends.
   - Comunicación fluida entre módulos y despliegue independiente.

3. **Caja de Búsqueda:**

   - Permite al usuario buscar productos por nombre.
   - Navega a los resultados de la búsqueda al enviar el formulario.

4. **Resultados de la Búsqueda:**

   - Muestra una lista de hasta 4 productos obtenidos de la API de Mercado Libre.
   - Cada producto incluye:
     - Imagen
     - Nombre
     - Precio
     - Estado (nuevo/usado)
     - Indicador de envío gratis
   - Permite navegar al detalle de un producto al hacer clic en él.

5. **Detalle del Producto:**
   - Muestra información detallada del producto seleccionado:
     - Imagen
     - Nombre
     - Precio
     - Cantidad vendida
     - Descripción
     - Indicador de envío gratis y estado del producto

---

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **React Redux**: Gestión de estado global.
- **TypeScript**: Tipado estático para mayor robustez.
- **Vite**: Herramienta rápida para desarrollo y compilación.
- **Sass**: Preprocesador de CSS para estilos reutilizables y estructurados.
- **Module Federation**: Integración de microfrontends de manera modular.

---

## 📌 Versiones de Librerías

| Librería        | Versión |
| --------------- | ------- |
| react           | ^18     |
| typescript      | ^5.5.4  |
| react-redux     | ^9.1.2  |
| reduxjs/toolkit | ^2.2.7  |
| axios           | ^1.7.3  |
| prettier        | ^3.3.3  |
| eslint          | ^8      |
| mui/material    | ^5.16.7 |

---

## 🖌️ Configuración del Sistema de Diseño

El sistema de diseño está estructurado según el patrón **Atomic Design**, que separa los componentes en los siguientes niveles:

- **Átomos:** Componentes básicos como botones, inputs, etc.
- **Moléculas:** Combina átomos para formar componentes más complejos.
- **Organismos:** Agrupaciones de moléculas que forman secciones completas de la UI.

Los componentes del sistema de diseño se encuentran en el directorio `ux-material`. Para agregar nuevos componentes:

1. Dirígete al nivel adecuado (`atoms`, `molecules` o `organisms`).
2. Crea un nuevo componente.
3. Asegúrate de documentarlo utilizando **Storybook** (opcional).

---

## 🧩 Microfrontend y Module Federation

Este proyecto utiliza **Module Federation** para manejar la integración de microfrontends. La configuración principal se encuentra en `webpack.config.js`. Ejemplo de configuración:

```javascript
new ModuleFederationPlugin({
  name: 'container',
  filename: 'remoteEntry.js',
  remotes: {
    uiClient: 'uiClient@http://localhost:4001/remoteEntry.js',
  },
  exposes: {
    './SearchBar': './src/components/SearchBar',
  },
  shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
});
```

## Guía para la creación de la imagen de la aplicación

Para crear la imagen de la aplicación, se debe tener instalado correctamente y en ejecución docker. Luego se debe de ubicar a la altura del proyecto y ejecutar el siguiente comando:

```$bash
docker build -t mercadolibre-challenge-system-desing:1.0 .

```

Esto generará una imagen de la aplicación en su máquina local con el nombre de _name-image-1-0_. Puede cambiar el nombre de dicha imagen si lo desea cambiando el comando por el siguiente:

```$bash
docker build -t <nombre-de-tu-imagen> .
```

Luego de creada la imagen exitosamente, se ejecuta el siguiente comando:

```$bash
docker run -d -p 4000:4000 --name mercadolibre-challenge mercadolibre-challenge:1.0
```

Este correrá un nuevo contenedor con el nombre de la-imagen-container-1-0\_ a partir de la imagen creada en el paso anterior . Si ha cambiado el nombre de esta imagen por una particular debe de cambiar el comando por el siguiente:

```$bash
docker run -d -p 4000:4000 --name name-container-1-0 <nombre-de-tu-imagen>
```

También puede cambiarse el nombre del contenedor a ejecutar si lo desea:

```$bash
docker run -d -p 4000:4000 --name <nombre-de-tu-contenedor-a-correr> <nombre-de-tu-imagen>
```

## Sistema de Diseño

## Navega al directorio del sistema de diseño

```bash
cd mf-system-design
```

## Instala las dependencias

```bash
yarn install
```

## Genera la build del sistema de diseño:

```bash
yarn build
```

## Inicia el sistema de diseño:

```bash
yarn start
```
