const express = require('express');
const app = express();

const DEFAULT_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.json({
    mensaje: 'Servidor API de Express funcionando correctamente',
    rutas: [
      'GET /api/saludo',
      'GET /api/nombre',
      'GET /api/escuela'
    ]
  });
});

// 1. Ruta /api/saludo
app.get('/api/saludo', (req, res) => {
  res.json({
    mensaje: '¡Hola! Bienvenido a la API de la clase.'
  });
});

// 2. Ruta /api/nombre
app.get('/api/nombre', (req, res) => {
  res.json({
    nombre: 'Jesús Macías Martínez'
  });
});

// 3. Ruta /api/escuela
app.get('/api/escuela', (req, res) => {
  res.json({
    escuela: 'Maestría - Plataforma en la nube'
  });
});

// Función para iniciar el servidor con manejo de puerto ocupado
function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[Aviso] El puerto ${port} ya está en uso. Intentando en el puerto ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Error al iniciar el servidor:', err);
    }
  });
}

startServer(DEFAULT_PORT);
