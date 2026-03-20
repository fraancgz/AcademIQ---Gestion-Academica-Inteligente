# 🚀 Backend Core - Node & Express

![Node](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-En%20desarrollo-orange)

> 🧠 Base backend escalable para sistemas de administración.  
Diseñado con arquitectura modular, buenas prácticas y preparado para crecer con autenticación, base de datos y lógica de negocio.

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

## 📌 Descripción

Este proyecto representa el **núcleo backend** de un sistema administrativo moderno.  

Está enfocado en:

- Escalabilidad  
- Separación de responsabilidades  
- Mantenibilidad del código  
- Preparación para futuras integraciones (DB, auth, APIs externas)  

---

## 🛠️ Stack Tecnológico

| Tecnología   | Descripción |
|--------------|------------|
| Node.js      | Entorno de ejecución para JavaScript |
| Express      | Framework backend minimalista |
| Dotenv       | Manejo seguro de variables de entorno |
| Nodemon      | Hot reload en desarrollo |
| Bootstrap 5  | UI rápida y responsive |

---

## ✨ Features

- ✔ Servidor Express configurado  
- ✔ Arquitectura modular con `Router`  
- ✔ Endpoint `/status` para health check  
- ✔ Manejo de archivos estáticos (`/public`)  
- ✔ Sistema básico de logs en `.txt`  

---

## 📂 Estructura del Proyecto

```bash
.
├── public/              # Archivos estáticos (HTML, CSS, JS)
├── src/
        ├── controllers/ # Maneja lógica de negocio
        ├── routes/      # Rutas de la API
        ├── middlewares/ # Verifica condiciones y prepara datos          
        ├── data/        # Archivo de datos
       
├── logs/                # Archivos de registro del servidor
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

Crea un archivo `.env` en la raíz:

```env
PORT=3005
```

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
- [ ] Fase 2: Base de datos + CRUD de productos  
- [ ] Fase 3: Autenticación (JWT) + usuarios  
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