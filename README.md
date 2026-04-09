# 🎓 AcademIQ - Gestión Académica Inteligente

![Node](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![Status](https://img.shields.io/badge/Status-En%20Desarrollo-orange)
![Category](https://img.shields.io/badge/Focus-Productividad_Docente-blue)

> **Optimiza tu tiempo, potencia tu enseñanza.**
> 
> **AcademIQ** es una solución integral diseñada para que los profesores retomen el control de su agenda. Automatiza la gestión de actividades y obtén métricas claras sobre tu carga laboral.

---

## 📑 Tabla de Contenidos

- [📌 Descripción](#-descripción)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [✨ Features](#-features)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Instalación](#️-instalación)
- [🚀 Scripts Disponibles](#-scripts-disponibles)
- [🌱 Variables de Entorno](#-variables-de-entorno)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contribución](#-contribución)
- [👤 Autor](#-autor)
- [📄 Licencia](#-licencia)

---

## 📌 Descripción del Proyecto

AcademIQ es un **asistente de productividad** diseñado para ayudar a los docentes a optimizar sus tiempos de desarrollo y elaboración de material pedagógico. El sistema no solo organiza, sino que cuantifica el esfuerzo requerido para cada tarea.

### ✨ Funcionalidades Principales
* **Gestión de Actividades:** Elaboración simplificada de tareas, pruebas y trabajos prácticos.
* **Estimación Inteligente de Tiempos:** El sistema entrega mensajes predictivos sobre cuánto tiempo real requiere finalizar cada actividad según su complejidad.
* **Calendario de Carga Docente:** Visualización tipo calendario para monitorear plazos de entrega y evitar la saturación de actividades en períodos críticos.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **Node.js** | Entorno de ejecución para el servidor. |
| **Express** | Framework para la gestión de rutas y middleware. |
| **Sequelize** | ORM para la persistencia de datos (PostgreSQL). |
| **Handlebars** | Motor de plantillas dinámicas para la interfaz. |
| **Postgres** | Base de datos relacional robusta para asegurar la integridad de la data académica. |

---

## ✨ Features

- [x] **Servidor Express:** Configuración robusta y optimizada para alto rendimiento.
- [x] **Arquitectura Modular:** Estructura basada en `Router` para una escalabilidad limpia del backend.
- [x] **Health Check:** Endpoint `/status` implementado para monitoreo del estado del servidor.
- [x] **Gestión de Estáticos:** Manejo eficiente de archivos en la carpeta `/public`.
- [ ] **Módulo de Tiempos:** Algoritmo de estimación de carga horaria (En desarrollo).

---

## 📂 Estructura del Proyecto

```bash
.
├── src/
        ├── config/          # Configuración de DB (Sequelize) y variables de entorno
        ├── controllers/     # Lógica de negocio y manejo de peticiones
        ├── data/            # Almacenamiento local, logs (.txt) y semillas de datos
        ├── helpers/         # Funciones de utilidad y helpers para Handlebars
        ├── middlewares/     # Funciones de validación, seguridad y control de sesión
        ├── models/          # Definición de esquemas y modelos de Sequelize (Postgres)
        ├── public/          # Archivos estáticos (CSS, JS, Imágenes)
        ├── routes/          # Definición de los puntos de entrada (endpoints)
        ├── views/           # Plantillas de interfaz de usuario (.hbs)
       
├── .env                 # Variables de entorno
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/fraancgz/modulo6-node_express.git
cd modulo6-node_express
```

### 2. Instalar dependencias

```bash
npm install
```

---

## 🌱 Variables de Entorno

> [!IMPORTANT]
> **AcademIQ** requiere una instancia de **PostgreSQL** activa para funcionar. Sin la base de datos configurada, la aplicación no podrá gestionar sesiones ni persistir actividades.

### Pasos para la Base de Datos:
1. **Creación:** Debes crear una base de datos manualmente (vía psql o pgAdmin) llamada `academiq_db` (o el nombre que prefieras).
2. **Variables de Entorno:** Crea un archivo `.env` en la raíz del proyecto y configura tus credenciales:
   ```env
   PORT=3000

   DB_NAME=tu_base_de_datos
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_HOST=127.0.0.1
   DB_DIALECT=postgres
   SESSION_SECRET=un_secreto_seguro

---

## 🚀 Scripts Disponibles

| Comando       | Descripción                          |
|--------------|--------------------------------------|
| npm run dev  | Ejecuta el servidor en desarrollo    |
| npm start    | Ejecuta el servidor en producción    |

---

## 🔌 API Endpoints

### GET /status Ejemplo de como debería quedar

```json
{
  "status": "success",
  "message": "Backend Core is operational",
  "data": {
    "environment": "development",
    "uptime": "1450 seconds",
    "timestamp": "2026-03-20T15:30:00Z",
    "version": "1.0.0",
    "services": {
      "database": "pending_connection",
      "file_system": "healthy",
      "logs": "active"
    }
  }
}
```

---

## 🗺️ Roadmap

- [x] Fase 1: Arquitectura base + rutas + middlewares 🚧 En desarrollo   
- [x] Fase 2: Base de datos + CRUD de productos  
- [x] Fase 3: Autenticación (JWT) + usuarios (Por ahora sin JWT - Uso de express-session)  
- [ ] Fase 4: Roles y permisos  
- [ ] Fase 5: Tests + documentación API  

---

## 🤝 Contribución

Las contribuciones son bienvenidas 🚀

1. Fork del proyecto  
2. Crear rama:  
   ```bash
   git checkout -b feature/nueva-feature
   ```
3. Commit:  
   ```bash
   git commit -m "feat: nueva funcionalidad"
   ```
4. Push:  
   ```bash
   git push origin feature/nueva-feature
   ```
5. Abrir Pull Request  

---

## 👤 Autor

Francisco Carrasco  
Ingeniería en Informática — Duoc UC  

---

## 📄 Licencia

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE.md](LICENSE.md) para más detalles.

---
Desarrollado con ❤️ por [Francisco Carrasco](https://github.com/fraancgz) 😊