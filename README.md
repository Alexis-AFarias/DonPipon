# 🐾 **Don Pipon - Veterinaria Web**  

**Don Pipon** es una aplicación web para una veterinaria donde los usuarios pueden registrarse, iniciar sesión, y gestionar sus turnos de consulta. Los usuarios pueden reservar turnos en línea y, si es necesario, cancelarlos.

## Funcionalidades

- **Registro de usuario**: Los usuarios pueden crear una cuenta en la aplicación.
- **Inicio de sesión**: Los usuarios pueden iniciar sesión con sus credenciales.
- **Reserva de turnos**: Los usuarios pueden reservar turnos para consultas veterinarias.
- **Cancelación de turnos**: Los usuarios pueden cancelar turnos previamente reservados.
- **Base de datos**: La aplicación está conectada a una base de datos **PostgreSQL** para almacenar los usuarios y sus turnos.

## Tecnologías utilizadas

### Frontend:
- **Vite**: Herramienta de desarrollo de frontend para mejorar la experiencia de desarrollo y el rendimiento.
- **React**: Biblioteca para construir la interfaz de usuario.
- **CSS/HTML**: Estilos básicos para la interfaz.

### Backend:
- **Node.js**: Entorno de ejecución para el backend.
- **Express.js**: Framework para construir las rutas y la lógica del servidor.
- **PostgreSQL**: Base de datos relacional para almacenar la información de los usuarios y los turnos.

1️⃣ Clona el Repositorio
```bash
git clone https://github.com/Alexis-AFarias/DonPipon-Turnos.git
```
2️⃣ Configura las Variables de Entorno
Backend:
Crea un archivo .env en la raíz del directorio backend y agrega las siguientes variables de configuración:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432   
DB_USER=usuario_basededatos
DB_PASSWORD=contraseña_basededatos
DB_NAME=nombre_basededatos
```
3️⃣ Instala las Dependencias para el Backend
Navega a la carpeta backend e instala las dependencias necesarias:
```env
npm install
```
4️⃣ Instala las Dependencias para el Frontend
Navega a la carpeta frontend e instala las dependencias necesarias:
```env
npm install
```
5️⃣ Inicia el Servidor Backend
Inicia el servidor backend:
```env
npm run start
```

6️⃣ Inicia el Servidor Frontend
Navega al directorio frontend y ejecuta el servidor de desarrollo:
```env
npm run dev
```
