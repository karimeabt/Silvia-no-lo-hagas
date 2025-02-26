const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Cambia al puerto de tu frontend
        methods: ["GET", "POST"]
    }
});

app.use(cors());

io.on("connection", (socket) => {
    console.log("Un jugador se ha conectado:", socket.id);

    socket.on("mensaje", (data) => {
        console.log("Mensaje recibido:", data);
        io.emit("mensaje", data); // Enviar a todos los clientes
    });

    socket.on("disconnect", () => {
        console.log("Jugador desconectado");
    });
});

server.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
