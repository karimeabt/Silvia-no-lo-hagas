// src/App.jsx

import React from "react";
//import InicioJuego from "./inicioJuego";
import Drawer from "./Habitacion";

function App() {
  return (
    /*<div>
      <InicioJuego />
    </div>*/
    <div>
    <h1>Ej. de Sprite Sheet</h1>
    <Drawer />
    </div>
  );
}

export default App;

/*import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Conectar con el backend

function App() {
    const [mensaje, setMensaje] = useState("");
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        socket.on("mensaje", (data) => {
            setMensajes((prev) => [...prev, data]); // Agregar mensaje recibido
        });

        return () => socket.off("mensaje"); // Limpiar evento al desmontar
    }, []);

    const enviarMensaje = () => {
        socket.emit("mensaje", mensaje);
        setMensaje(""); // Limpiar input después de enviar
    };

    return (
        <div>
            <h1>Chat en Tiempo Real</h1>
            <input
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe un mensaje"
            />
            <button onClick={enviarMensaje}>Enviar</button>

            <ul>
                {mensajes.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;*/
