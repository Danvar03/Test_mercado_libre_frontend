# Mercado Libre Frontend Challenge 🚀

![react-toolkit](https://img.shields.io/badge/React-Library-61DAFB?logo=react&logoColor=white)
![react-redux](https://img.shields.io/badge/React%20Redux-Library-764ABC?logo=redux&logoColor=white)
![node](https://img.shields.io/badge/Node.js-Runtime-339933?logo=node.js&logoColor=white)
![docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white)
![sass](https://img.shields.io/badge/Sass-CSS%20Preprocessor-CC6699?logo=sass&logoColor=white)
![production-ready](https://img.shields.io/badge/In%20Develop-Ready-green?logo=check&logoColor=white)

## 📖 Tabla de Contenidos

1. [Funcionalidades Principales](#funcionalidades-principales)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Notas sobre Microfrontends](#notas-sobre-microfrontends)
5. [Instalación y Ejecución](#instalación-y-ejecución)
6. [Levantar los Servicios Individualmente](#levantar-los-servicios-individualmente)
7. [Despliegue en AWS](#despliegue-en-aws)
8. [Documentación del Proyecto](#documentación-del-proyecto)

---

## Funcionalidades Principales 🎯

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

## 📝 Notas sobre Microfrontends

1. **Orden de Levantamiento**: Es importante seguir el orden correcto para garantizar que los microfrontends consuman las dependencias necesarias:

   - **Primero**: Levanta el servidor (API) si se requiere para el consumo de datos.
   - **Segundo**: Levanta el sistema de diseño (remote entry), ya que otros microfrontends dependerán de él.
   - **Tercero**: Levanta los microfrontends específicos como el cliente (UI) o el shell principal.

## 🌐 Configuración de Variables de Entorno

Para que el proyecto funcione correctamente en tu entorno local, es necesario configurar un archivo `.env` en la raíz de cada servicio. A continuación, se especifican las variables de entorno requeridas y sus valores predeterminados.

---

### **Servidor (API)** - `mf-server/.env`

```env
PORT=8080
API_URL=http://localhost:8080
MERCADO_LIBRE_API=https://api.mercadolibre.com

```

### **Cliente (UI)** - `mf-system.desing/.env`

```env
PORT=4001
```


# 🛠️ Pasos para Configurar

Crea un archivo .env en la raíz de cada servicio: mf-server, mf-system-design, y ui-client-react.
Copia las variables correspondientes según el servicio.
Guarda los archivos y reinicia los servicios para aplicar la configuración.

# Instalar Dependencias

Desde la raíz del proyecto:

Yarn o NPM:

```
yarn install
# o
npm install

```

## Módulo Concurrently

El script start:all utiliza concurrently, que permite ejecutar varios comandos en paralelo. Si no está instalado, agrégalo como dependencia:

```
yarn add concurrently --dev
# o
npm install concurrently --save-dev

```

## Para levantar todo el sistema:

```
yarn start:all
# o
npm run start:all
```

## Para ejecutar cada servicio por separado:

```
yarn start:server
yarn build:system && yarn start:system
yarn build:ui && yarn start:ui

```

## Levantar los Servicios Individualmente

## Servidor (API)

## Navega al directorio del Servidor

```bash
cd mf-server
```

## Instala las dependencias

```bash
yarn install
```

## Inicia el Servidor:

```bash
yarn start
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
   ```

## 🎯 Nota: los pasos anteriores aplica tanto para el cliente como el server

# 📚 Documentación del Proyecto

## **Resumen del Proyecto**

Este proyecto implementa una aplicación basada en **microfrontends** utilizando React, Redux y Redux Toolkit, junto con una estructura modular basada en el diseño **Atomic Design**. El objetivo principal es ofrecer una experiencia fluida para buscar productos, navegar entre categorías y consultar detalles de artículos, utilizando datos de una API externa.

---

## **Estructura del Proyecto**

### Diseño Modular con Atomic Design

El proyecto utiliza **Atomic Design** para la construcción de componentes reutilizables y escalables. La estructura se divide en niveles jerárquicos:

1. **Átomos**:

   - Componentes básicos y reutilizables como botones, etiquetas y entradas de texto.
   - Ejemplo: `BreadcrumbItem`, `PaginationButton`.

2. **Moléculas**:

   - Combinaciones simples de átomos para crear componentes más complejos.
   - Ejemplo: `Breadcrumb`, `ItemDetails`.

3. **Organismos**:

   - Componentes más completos que combinan moléculas y átomos para funcionalidades específicas.
   - Ejemplo: `ItemListContent`.

4. **Templates**:

   - Plantillas estructurales que ensamblan organismos para construir una página.
   - Ejemplo: La estructura principal en `DetailsContent`.

5. **Páginas**:
   - La instancia final que combina templates con datos específicos para renderizar vistas completas.
   - Ejemplo: `Home`, `ItemDetailPage`.

Esta estructura modular permite mantener la consistencia visual y facilita la escalabilidad.

---

## **Implementaciones Técnicas**

### **1. Hooks Personalizados**

Se desarrollaron hooks personalizados para encapsular lógica reutilizable:

- **`useCategories`**:

  - Gestiona las categorías actuales y crea rutas para el componente de breadcrumb.
  - Útil para mostrar y navegar entre categorías relacionadas.

- **`useItems`**:

  - Gestiona la lógica de búsqueda y paginación.
  - Se conecta a la API para obtener la lista de productos y categorías relacionadas.

- **`useItemSearch`**:
  - Sincroniza los parámetros de búsqueda con la URL y realiza las llamadas necesarias a la API.
  - Administra la paginación y el estado del formulario de búsqueda.

### **2. Redux y Redux Toolkit**

Se utilizó Redux Toolkit para gestionar el estado global de la aplicación.

- **Slices**:

  - `itemsSlice`: Maneja el estado de los productos, las categorías, la paginación y los detalles del producto.

- **Thunk Async**:
  - `fetchItems`: Recupera productos desde la API basada en términos de búsqueda y parámetros de paginación.
  - `fetchItemById`: Obtiene información detallada de un producto basado en su ID.

### **3. Adaptadores**

Se implementaron adaptadores para transformar los datos de la API a un formato adecuado para los componentes.

- **`getItems`**:
  - Consume la API y devuelve un objeto con productos, categorías y datos de paginación.
- **`getItemById`**:
  - Recupera los detalles de un producto específico y transforma la respuesta para ser utilizada directamente en la interfaz.

### **4. Componentes Clave**

- **Breadcrumb**:
  - Utiliza los hooks `useCategories` y `useItemSearch` para construir rutas dinámicas.
- **ItemList**:

  - Renderiza la lista de productos, integrando el breadcrumb, la paginación y el contenido de la lista.

- **DetailsContent**:
  - Combina componentes como `ItemImage`, `ItemDetails`, y `ItemDescription` para mostrar información detallada del producto.

---

## **Capas del Proyecto**

### **Capa de Presentación**

- **Componentes UI**:
  - Implementados utilizando React y Atomic Design.
  - Garantizan una interfaz consistente y reutilizable.

### **Capa de Estado**

- **Redux Store**:
  - Centraliza la lógica de negocio y el estado de la aplicación.
  - Maneja acciones, reducers y thunks para la comunicación con la API.

### **Capa de Servicios**

- **Adaptadores**:
  - `getItems`, `getItemById`: Manejan la comunicación con la API y transforman los datos.

---

## **Flujo de Funcionalidad**

1. **Búsqueda de Productos**:

   - El usuario introduce un término de búsqueda.
   - El hook `useItemSearch` sincroniza el término con la URL y realiza la llamada a la API utilizando `fetchItems`.

2. **Navegación entre Categorías**:

   - El componente `Breadcrumb` muestra las categorías actuales.
   - Cada categoría se enlaza con una ruta que utiliza `useCategories` para generar enlaces dinámicos.

3. **Detalles del Producto**:

   - Al seleccionar un producto, se navega a la página de detalles.
   - `fetchItemById` obtiene la información detallada y las categorías relacionadas.

4. **Pagos**:
   - Se integran botones de acción como "Comprar" en `ItemDetails`.

---

## **Resumen**

Este proyecto es una solución moderna para una aplicación de búsqueda y detalle de productos. La combinación de **Atomic Design**, **Redux Toolkit**, y **microfrontends** garantiza modularidad, escalabilidad y una experiencia de usuario fluida.

# 🗂️ Estructura del Proyecto

Este proyecto está organizado en capas, siguiendo buenas prácticas de arquitectura para mantener el código

```bash
src/
├── __mocks__/            # Archivos mock para pruebas
├── application/          # Lógica de negocio y configuración del estado
│   ├── const/            # Constantes utilizadas en toda la aplicación
│   ├── hooks/            # Hooks personalizados
│   ├── redux/            # Configuración y slices de Redux
│   ├── routes/           # Configuración de rutas
│   └── utils/            # Utilidades y funciones reutilizables
├── infrastructure/       # Lógica de integración con APIs externas
│   ├── adapters/         # Adaptadores para transformar datos de la API
│   └── __tests__/        # Pruebas unitarias relacionadas con infraestructura
├── presentation/         # Capa de presentación (UI)
│   ├── assets/           # Recursos estáticos como imágenes y fuentes
│   ├── components/       # Componentes atómicos y moleculares
│   ├── pages/            # Páginas completas
│   └── styles/           # Estilos globales de la aplicación
├── index.css             # Estilos principales
└── index.js              # Punto de entrada principal
```


# 🌟 Arquitectura del Proyecto

El proyecto utiliza una **arquitectura modular por capas**, diseñada para garantizar la **modularidad**, **escalabilidad** y **mantenibilidad** del código. A continuación, se describe la estructura del proyecto y las razones para esta organización.

---

## 🏗️ Resumen de la Arquitectura

### **1. Modularidad**
Cada capa tiene una responsabilidad clara y única:
- **Separación de Preocupaciones**: Cada carpeta maneja una parte específica de la lógica, lo que facilita la colaboración en equipos y la detección de errores.
- **Escalabilidad**: Permite agregar nuevas funcionalidades sin afectar otras partes del sistema.

### **2. Reutilización**
La lógica de negocio, los componentes y las utilidades están diseñados para ser reutilizables, promoviendo el uso de código DRY (*Don't Repeat Yourself*).

### **3. Testing**
Con la estructura clara y modular, las pruebas unitarias y de integración se pueden realizar de manera aislada, garantizando la calidad del sistema.

---

## 📂 Detalles de la Arquitectura por Capas

### **1. `__mocks__/`**
- Archivos mock utilizados para pruebas unitarias.
- Ejemplo: Simulación de respuestas de API para pruebas locales sin depender de servicios externos.

### **2. `application/`**
- Maneja la lógica de negocio y la configuración del estado global.
- **Subcarpetas**:
  - **`const/`**: Constantes globales como rutas o claves de configuración.
  - **`hooks/`**: Hooks personalizados para encapsular lógica reutilizable.
  - **`redux/`**: Configuración de Redux, incluyendo slices y middlewares.
  - **`routes/`**: Configuración de rutas utilizando React Router.
  - **`utils/`**: Funciones auxiliares que se usan en toda la aplicación.

**Por qué se usa:**
- Centraliza la lógica de negocio y el estado global para mantener consistencia entre componentes.
- Facilita la reactividad y sincronización de datos.

---

### **3. `infrastructure/`**
- Contiene la lógica de integración con servicios externos (APIs).
- **Subcarpetas**:
  - **`adapters/`**: Transforman datos de la API en un formato adecuado para la aplicación.
  - **`__tests__/`**: Pruebas unitarias de los adaptadores y la infraestructura.

**Por qué se usa:**
- Aislar la lógica de integración permite cambiar o actualizar servicios externos sin afectar otras capas.
- Promueve la reutilización y un diseño orientado a interfaces.

---

### **4. `presentation/`**
- Maneja toda la interfaz de usuario y la lógica de presentación.
- **Subcarpetas**:
  - **`assets/`**: Recursos estáticos como imágenes, íconos y fuentes.
  - **`components/`**: Contiene los componentes estructurados según **Atomic Design**:
    - Átomos, moléculas y organismos para una construcción modular.
  - **`pages/`**: Vistas completas que combinan organismos y templates para renderizar pantallas específicas.
  - **`styles/`**: Estilos globales y específicos.

**Por qué se usa:**
- Siguiendo **Atomic Design**, la interfaz es modular y escalable.
- Facilita el mantenimiento y la reutilización de componentes en diferentes partes de la aplicación.

---

### **5. Archivos Globales**
- **`index.css`**: Define estilos globales que se aplican en toda la aplicación.
- **`index.js`**: Punto de entrada principal donde se configura React y se integra con Redux y el router.

**Por qué se usa:**
- Los archivos globales ayudan a mantener consistencia visual y funcional en toda la aplicación.

---

## ✨ Beneficios de Esta Arquitectura

1. **Claridad**:
   - Cada capa tiene una responsabilidad definida, facilitando la comprensión del flujo de datos.

2. **Escalabilidad**:
   - Es fácil agregar nuevas funcionalidades, ya que cada capa es independiente.

3. **Mantenibilidad**:
   - El código modular permite actualizar partes específicas sin riesgos para el resto del sistema.

4. **Pruebas Aisladas**:
   - Con la lógica separada, las pruebas unitarias son más confiables y fáciles de implementar.

5. **Reutilización de Código**:
   - Los adaptadores, hooks y componentes están diseñados para ser reutilizados en múltiples partes de la aplicación.

---

## 🚀 Ejemplo del Flujo de Trabajo

1. **Usuario realiza una búsqueda**:
   - El hook `useItemSearch` sincroniza el término de búsqueda con el estado global.
   - Se llama al adaptador en `infrastructure/adapters/` para obtener los datos desde la API.

2. **Resultados son procesados**:
   - Los datos son transformados por los adaptadores y almacenados en Redux (`application/redux/`).

3. **Renderizado de la interfaz**:
   - Los datos almacenados son utilizados por los componentes en `presentation/` para mostrar los resultados.

---

Esta arquitectura garantiza un flujo limpio y escalable, ideal para aplicaciones modernas como esta solución de búsqueda en Mercado Libre.
