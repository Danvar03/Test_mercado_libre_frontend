# Mercado Libre Backend Challenge - Server

![nodejs](https://img.shields.io/badge/Node.js-Runtime-339933?logo=node.js&logoColor=white)
![express](https://img.shields.io/badge/Express-Framework-black?logo=express&logoColor=white)
![docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-Language-3178C6?logo=typescript&logoColor=white)
![production-ready](https://img.shields.io/badge/In%20Develop-ready-green?logo=check&logoColor=white)

---

## 📖 Tabla de Contenidos

1. [Introducción](#1-introducción)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Instalación y Ejecución](#3-instalación-y-ejecución)
   - [Pre-Requisitos](#31-pre-requisitos)
   - [Variables de Entorno](#32-variables-de-entorno)
   - [Ejecutar en Desarrollo](#33-ejecutar-en-desarrollo)
   - [Pruebas Unitarias](#34-pruebas-unitarias)
4. [Endpoints API](#4-endpoints-api)
5. [Contribuciones](#5-contribuciones)

---

## 1. Introducción

El **Mercado Libre Backend Challenge - Server** es un servidor construido con **Node.js** y **Express** para manejar las solicitudes de la aplicación del cliente. Este servidor actúa como intermediario entre el cliente y la API de Mercado Libre, proporcionando endpoints personalizados para el consumo del frontend.

---

## 2. Estructura del Proyecto

```plaintext
server/
├── src/                   # Carpeta principal del código fuente
│   ├── api/               # Endpoints principales del servidor
│   │   ├── items.js       # Endpoint para manejar búsquedas de productos
│   │   └── itemDetail.js  # Endpoint para manejar el detalle de un producto
│   │
│   ├── utils/             # Utilidades compartidas
│   │   └── transform.js   # Funciones para transformar datos de la API de Mercado Libre
│   │
│   └── index.js           # Punto de entrada principal del servidor
│
├── .env                   # Variables de entorno (puerto, URL base de la API, etc.)
├── package.json           # Dependencias del proyecto
├── README.md              # Documentación del servidor
```
