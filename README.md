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
├── ui-client-react/         # Código del cliente (React)
├── mf-server/               # Código del servidor (Node.js y Express)
├── mf-system-design/        # Sistema de diseño y componentes reutilizables
└── README.md               # Documentación del proyecto
```

# Despliegue de API en AWS utilizando ECR y ECS con Fargate

Este documento describe el proceso para desplegar una aplicación Docker en AWS utilizando Elastic Container Registry (ECR) y Elastic Container Service (ECS) con Fargate.

---

## **1. Configurar ECR para almacenar la imagen Docker**

1. **Crear un repositorio ECR**:
   - Abre la consola de AWS.
   - Ve a **Elastic Container Registry > Repositories**.
   - Haz clic en **Create repository**.
   - Asigna un nombre al repositorio (por ejemplo, `ms-server-repo`) y deja las demás configuraciones predeterminadas.

2. **Subir la imagen Docker al repositorio ECR**:
   - Autentica tu cliente Docker con el registro:
     ```bash
     aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin [id].dkr.ecr.us-east-2.amazonaws.com
     ```
   - Crea la imagen Docker:
     ```bash
     docker build -t ms-server .
     ```
   - Etiqueta la imagen:
     ```bash
     docker tag ms-server:latest [id].dkr.ecr.us-east-2.amazonaws.com/ms-server:latest
     ```
   - Sube la imagen al repositorio:
     ```bash
     docker push [id].dkr.ecr.us-east-2.amazonaws.com/ms-server:latest
     ```

---

## **2. Configurar ECS para ejecutar el contenedor**

### **2.1 Crear un clúster**
1. Ve a la consola de AWS ECS: [AWS ECS](https://console.aws.amazon.com/ecs).
2. Haz clic en **"Create Cluster"**.
3. Selecciona **"Networking only (Fargate)"**.
4. Asigna un nombre al clúster (por ejemplo, `ms-server-cluster`).
5. Configura las opciones de red (puedes usar las predeterminadas).
6. Crea el clúster.

### **2.2 Definir una tarea**
1. Ve a **Task Definitions** y selecciona **Create new Task Definition**.
2. Elige **Fargate** como tipo de tarea.
3. Configura la tarea:
   - **Nombre de la tarea**: `ms-server-task`.
   - **CPU y Memoria**: Configura valores pequeños (ejemplo: 0.5 GB y 0.25 vCPU) para mantenerte dentro de la capa gratuita.
   - **Contenedor**:
     - **Nombre**: `ms-server-container`.
     - **Imagen**: Utiliza la URL de la imagen en ECR (por ejemplo, `061039aaa1277aaaa0785.dkr.ecr.us-east-2.amazonaws.com/ms-server:latest`).
     - **Port Mappings**: Mapea el puerto 8080 (o el puerto usado por tu aplicación).
4. Guarda la definición de la tarea.

### **2.3 Crear un servicio**
1. Ve a la pestaña **Services** dentro de tu clúster.
2. Haz clic en **Create**.
3. Configura el servicio:
   - **Launch type**: Fargate.
   - **Nombre del servicio**: `ms-server-service`.
   - **Número de tareas**: 1.
4. Configura la red:
   - Selecciona una **VPC** y **subredes** (predeterminadas).
   - Habilita la asignación de IP pública para que tu API sea accesible.

---

## **3. Probar la API**

1. Ve a la consola de **ECS > Clusters > ms-server-cluster > Services > Tasks**.
2. Haz clic en la tarea activa y copia la dirección IP pública asignada.
3. Prueba tu API accediendo a la URL:
   ```bash
   http://<PUBLIC-IP>:8080

## 🎯 Nota: los pasos anteriores aplica tanto para el cliente como el server
