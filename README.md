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

### Pasos para Ejecutar el Proyecto

1. **Clona el Repositorio**  
Clona este repositorio en tu máquina local:

git clone https://github.com/tu_usuario/don-pipon.git

2. **Configura las Variables de Entorno para el Backend**

Crea un archivo .env en la carpeta backend y agrega las siguientes variables de configuración:

# .env en la carpeta back/

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=nombre_de_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_de_datos
