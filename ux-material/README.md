# Test Mercado Libre Frontend

Este proyecto tiene como objetivo desarrollar una arquitectura de **Micro Frontends** para implementar funcionalidades específicas en la plataforma de Mercado Libre. Se incluye un diseño modular, un buscador y vistas detalladas.

## 📂 Estructura del Proyecto

- **mf-system-desing**: Sistema base para la arquitectura del diseño.
- **ms-server**: Servidor backend que soporta la funcionalidad de los microfrontends.
- **ui-client-react**: Aplicación cliente desarrollada en React.
- **ux-material**: Recursos de diseño.

---

## 📸 Capturas de Pantalla

### 🟢 **Buscador**
Este componente permite realizar búsquedas rápidas y dinámicas en la plataforma.

![Buscador](./images/01_Buscador.png)

### 🟢 **Buscador (Versión 2X)**
Detalle en alta resolución.

![Buscador 2X](./images/01_Buscador@2x.png.png)

---

### 🟢 **Detalle del Producto**
Pantalla para mostrar información detallada sobre un producto.

![Detalle](./images/02_Detalle.png)

### 🟢 **Detalle del Producto (Versión 2X)**
Detalle en alta resolución.

![Detalle 2X](./images/02_Detalle@2x.png.png)

---

### 🟢 **Resultados**
Página con los resultados de búsqueda.

![Resultados](./images/02_Resultados.png)

### 🟢 **Resultados (Versión 2X)**
Detalle en alta resolución.

![Resultados 2X](./images/02_Resultados@2x.png.png)

---

## 🛠️ Propuesta de Arquitectura
Este diagrama detalla la propuesta arquitectónica para los micro frontends utilizados en este proyecto.

![Propuesta Arquitectura Micro Frontend](./images/Propuesta_Arquitectura_Micro_Frontend.drawio.png)

---

## 🧑‍💻 Requisitos del Proyecto

1. **Node.js**: Recomendado v16 o superior.
2. **React**: Usado para la UI del cliente.
3. **Docker**: Para contenedores y despliegues.
4. **AWS ECS**: Para la orquestación de microfrontends (opcional).

---

## 🚀 Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Danvar03/Test_mercado_libre_frontend.gitgit
   cd test-mercado-libre-frontend
