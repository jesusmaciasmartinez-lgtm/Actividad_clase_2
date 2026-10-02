# 1. Imagen base oficial de Node.js (versión ligera Alpine)
FROM node:20-alpine

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiar archivos de dependencias
COPY package*.json ./

# 4. Instalar las dependencias
RUN npm install

# 5. Copiar el resto del código fuente del proyecto
COPY . .

# 6. Exponer el puerto del contenedor
EXPOSE 3000

# 7. Comando para iniciar la aplicación al arrancar el contenedor
CMD ["npm", "start"]
