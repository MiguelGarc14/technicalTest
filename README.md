# EFECTIVALE SYSTEM

Sistema Full Stack desarrollado con Java 17, Spring Boot, React, PostgreSQL y Docker utilizando arquitectura limpia (Clean Architecture).

---

# Tecnologías Utilizadas

## Backend

- Java 17
- Spring Boot 3
- Gradle
- PostgreSQL
- JdbcTemplate
- Stored Procedures
- Swagger/OpenAPI
- Lombok

## Frontend

- React
- Vite
- Bootstrap 5
- Axios

## Infraestructura

- Docker
- Docker Compose
- Nginx

---

# Arquitectura

El backend implementa Clean Architecture separando responsabilidades por capas:

```text
api/
application/
domain/
infrastructure/
config/
```

## Beneficios

- desacoplamiento
- mantenibilidad
- escalabilidad
- facilidad para testing
- evolución futura a microservicios

---

# Estructura del Proyecto

```text
evser-system/
│
├── backend/
├── frontend/
├── database/
└── docker-compose.yml
```

---

# Funcionalidades

## Clientes

- listar clientes
- guardar clientes
- validaciones frontend/backend

## Consignatarios

- listar consignatarios
- guardar consignatarios
- relación con clientes
- validaciones frontend/backend

---

# Endpoints REST

## Clientes

| Método | Endpoint |
|---|---|
| GET | `/api/clientes` |
| POST | `/api/clientes` |

---

## Consignatarios

| Método | Endpoint |
|---|---|
| GET | `/api/consignatarios` |
| POST | `/api/consignatarios` |

---

# Base de Datos

## Configuración PostgreSQL

| Parámetro | Valor |
|---|---|
| Database | evser |
| Usuario | postgres |
| Password | postgres |

---

# Requisitos Previos

Instalar:

- Docker Desktop
- Docker Compose

Verificar instalación:

```bash
docker --version
docker compose version
```

---

# Cómo Ejecutar el Proyecto

## 1. Clonar repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

---

## 2. Entrar al proyecto

```bash
cd evser-system
```

---

## 3. Construir contenedores

```bash
docker compose build --no-cache
```

---

## 4. Levantar servicios

```bash
docker compose up
```

---

# URLs

## Frontend

```text
http://localhost:3000
```

---

## Backend

```text
http://localhost:8080
```

---

## Swagger/OpenAPI

```text
http://localhost:8080/swagger-ui.html
```

---

# Docker Services

El sistema levanta automáticamente:

- postgres
- backend
- frontend

---

# Swagger

La documentación OpenAPI está disponible mediante Swagger UI.

Permite:

- probar endpoints
- visualizar contratos REST
- validar requests/responses

---

# Stored Procedures PostgreSQL

El proyecto utiliza:

- Functions
- Procedures

para desacoplar lógica SQL y mantener consistencia empresarial.

---

# Frontend

Frontend moderno desarrollado con:

- React
- Vite
- Axios
- Bootstrap 5

## Características

- formularios reactivos
- hooks (`useState`, `useEffect`)
- validaciones
- consumo REST
- tablas dinámicas

---

# Docker

## Backend

- multi-stage build
- JAR ejecutable
- Java 17 runtime

## Frontend

- build Node
- runtime Nginx

---

```text
docs/images/
```

Ejemplo:

```text
docs/
└── images/
    ├── frontend.png
    ├── swagger.png
    └── docker.png
```

---

# Capturas Sugeridas

## Frontend

<img width="1356" height="604" alt="image" src="https://github.com/user-attachments/assets/05be1aa3-301d-4394-8ade-7e3e8ec75bd5" />

- PostgreSQL conectado
- Clientes
<img width="1356" height="262" alt="image" src="https://github.com/user-attachments/assets/ddc05cff-ec4a-4c28-81ff-040785867959" />

- Consignatarios
<img width="1356" height="288" alt="image" src="https://github.com/user-attachments/assets/0caf787e-137f-42ce-b937-dbcb435fe6ea" />




## Swagger

- endpoints funcionando

## Docker

Resultado de:

```bash
docker ps
```

---

# Posibles Mejoras Futuras

## Backend

- DTOs
- Global Exception Handler
- Spring Validation
- JWT Authentication
- Spring Security
- Flyway
- Unit Testing
- Integration Testing
- Logging centralizado

## Frontend

- React Router
- Toast Notifications
- Context API
- React Hook Form
- Manejo global de errores
- Paginación
- Dark Mode

---

# Problemas Comunes

## Limpiar Docker Cache

```bash
docker compose down -v
docker compose build --no-cache
docker compose up
```

---

## Error Frontend Vite

Verificar existencia de:

```text
frontend/index.html
frontend/src/main.jsx
```

---

# Autor

Proyecto desarrollado como ejemplo empresarial Full Stack utilizando arquitectura limpia y tecnologías modernas desacopladas.
