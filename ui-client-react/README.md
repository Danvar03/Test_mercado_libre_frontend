# Mercado Libre Frontend Challenge - Client

![react-toolkit](https://img.shields.io/badge/React-Library-61DAFB?logo=react&logoColor=white)
![react-redux](https://img.shields.io/badge/React%20Redux-Library-764ABC?logo=redux&logoColor=white)
![sass](https://img.shields.io/badge/Sass-CSS%20Preprocessor-CC6699?logo=sass&logoColor=white)
![vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-Language-3178C6?logo=typescript&logoColor=white)

## 📖 Tabla de Contenidos

1. [Funcionalidades Principales](#funcionalidades-principales)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Instalación y Ejecución](#instalación-y-ejecución)
   - [Requisitos Previos](#requisitos-previos)
   - [Clonar el Repositorio](#clonar-el-repositorio)
   - [Ejecución en Desarrollo](#ejecución-en-desarrollo)
   - [Build para Producción](#build-para-producción)
4. [Estructura del Proyecto](#estructura-del-proyecto)

---

## 🎯 Funcionalidades Principales

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

---

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **React Redux**: Gestión de estado global.
- **TypeScript**: Tipado estático para mayor robustez.
- **Vite**: Herramienta rápida para desarrollo y compilación.
- **Sass**: Preprocesador de CSS para estilos reutilizables y estructurados.

---

## 🚀 Instalación y Ejecución

### Requisitos Previos

- [Node.js](https://nodejs.org) (v16 o superior)
- [Git](https://git-scm.com/)

### Clonar el Repositorio

Clona el repositorio y navega al directorio `client`:

```bash
git clone https://github.com/Danvar03/test_mercado_libre_frontend.git
cd client
```

### Pre-Requisitos

- Tener instalada una version de Node.js igual o mayor a la 22.1.0
- Tener instalado Podman
- Tener Yarn

### Versiones de librerias utilizadas

| Libreria        | Versión |
| --------------- | ------- |
| react           | 18      |
| typescript      | ^5.5.4  |
| react-redux     | ^9.1.2  |
| reduxjs/toolkit | ^2.2.7  |
| axios           | ^1.7.3  |
| prettier        | ^3.3.3  |
| eslint          | 8       |
| mui/material    | ^5.16.7 |

## Ejecutar el proyecto de forma local

Clonar el proyecto

```bash
  git clone
```

Ir al directorio donde se clono el proyecto

```bash
  cd
```

Instalar las dependencias

```bash
  yarn install
```

Comenzar el servidor

```bash
  yarn run start
```

Ejecutar entorno de pruebas unitarias

Ejecuta el siguiente comando:

```bash
  yarn run test
  yarn run coverage

```

## Guía para la creación de la imagen de la aplicación

Para crear la imagen de la aplicación, se debe tener instalado correctamente y en ejecución docker. Luego se debe de ubicar a la altura del proyecto y ejecutar el siguiente comando:

```$bash
docker build -t mercadolibre-challenge-client:1.0 .

```

Esto generará una imagen de la aplicación en su máquina local con el nombre de _name-image-1-0_. Puede cambiar el nombre de dicha imagen si lo desea cambiando el comando por el siguiente:

```$bash
docker build -t <nombre-de-tu-imagen> .
```

Luego de creada la imagen exitosamente, se ejecuta el siguiente comando:

```$bash
docker run -d -p 4001:4001 --name mercadolibre-challenge mercadolibre-challenge:1.0
```

Este correrá un nuevo contenedor con el nombre de la-imagen-container-1-0\_ a partir de la imagen creada en el paso anterior . Si ha cambiado el nombre de esta imagen por una particular debe de cambiar el comando por el siguiente:

```$bash
docker run -d -p 4001:4001 --name name-container-1-0 <nombre-de-tu-imagen>
```

También puede cambiarse el nombre del contenedor a ejecutar si lo desea:

```$bash
docker run -d -p 4001:4001 --name <nombre-de-tu-contenedor-a-correr> <nombre-de-tu-imagen>
```

## Cliente (UI)

## Navega al directorio del cliente

```bash
cd ui-client-react
```

## Instala las dependencias

```bash
yarn install
```

## Genera la build del cliente:

```bash
yarn build
```

## Inicia el sistema de cliente:

```bash
yarn start
```
