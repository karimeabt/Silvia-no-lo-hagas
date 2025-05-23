import React, { useState } from "react";
import "./InicioJuego.css"; // Estilos para la interfaz
import Habitacion from "./Habitacion";

// Imágenes importadas desde la carpeta src/assets/images
import personaje1 from "../../assets/images/sprites/personajes/silvia_normal.png";
import personaje2 from "../../assets/images/personaje2.png";
import personaje3 from "../../assets/images/personaje3.png";
import personaje4 from "../../assets/images/personaje4.png";
import personaje5 from "../../assets/images/sprites/personajes/silvia_normal.png";
import personaje5_hover from "../../assets/images/sprites/personajes/silvia_asustada.png";


const personajes = [
  { id: 1, nombre: "Laura", imagen: personaje1,imagenHover: personaje5_hover, desbloqueado: true },
  { id: 2, nombre: "Carmen", imagen: personaje2, imagenHover: personaje5_hover, desbloqueado: false },
  { id: 3, nombre: "Rosa", imagen: personaje3, imagenHover: personaje5_hover, desbloqueado: false },
  { id: 4, nombre: "Victor", imagen: personaje4, imagenHover: personaje5_hover, desbloqueado: false },
  { id: 5, nombre: "Silvia", imagen: personaje5, imagenHover: personaje5_hover,desbloqueado: false }
];

function InicioJuego() {
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
  //estado para el hover
  const [hoveredId, setHoveredId]= useState(null);

  const seleccionarPersonaje = (personaje) => {
    if (personaje.desbloqueado) {
      setPersonajeSeleccionado(personaje);
      // Aquí puedes agregar la lógica para empezar el juego con el personaje seleccionado
    }
  };

  if (personajeSeleccionado) {
    // Si ya se seleccionó un personaje, redirigir a la habitación
    return <Habitacion personaje={personajeSeleccionado} />;
  }

  return (
    <div className="inicio-juego">
      <h1>Elige tu personaje</h1>
      <div className="personajes-container">
        {personajes.map((personaje) => (
          <div
            key={personaje.id}
            className={`personaje ${personaje.desbloqueado ? "desbloqueado" : "bloqueado"}`}
            onClick={() => seleccionarPersonaje(personaje)}
            onMouseEnter={() => setHoveredId(personaje.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Imagen importada directamente desde la carpeta src */}
            <img 
                src={
                      hoveredId === personaje.id && personaje.imagenHover
                    ? personaje.imagenHover
                    : personaje.imagen
              }  
              alt={personaje.nombre}
              />

            <p>{personaje.nombre}</p>
            {!personaje.desbloqueado && <span>Desbloqueado más tarde</span>}
          </div>
        ))}
      </div>

      {personajeSeleccionado && (
        <div className="personaje-seleccionado">
          <h2>¡Has seleccionado a {personajeSeleccionado.nombre}!</h2>
          <button onClick={() => { /* Lógica para comenzar el juego con el personaje */ }}>
            Empezar juego
          </button>
        </div>
      )}
    </div>
  );
}

export default InicioJuego;
