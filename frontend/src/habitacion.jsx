import React, { useState } from "react";
import "./habitacion.css";
import habitacionAerea from '../../assets/images/habitacion_laura/habitacion-aerea.png';


// Lista de objetos dentro de la habitación
const objetos = [
  { id: 1, nombre: "Cuadro", pista: "Este cuadro esconde un secreto, intenta mirar detrás.", x: 150, y: 100 },
  { id: 2, nombre: "Escritorio", pista: "En el escritorio hay una carta con pistas clave.", x: 350, y: 250 },
  { id: 3, nombre: "Ventana", pista: "La ventana muestra una vista interesante, pero no se puede abrir.", x: 500, y: 50 }
];

const HabitacionConSVG = ({ personaje }) => {
  const [pista, setPista] = useState(null);

  const obtenerPista = (id) => {
    const objeto = objetos.find((obj) => obj.id === id);
    setPista(objeto.pista);
  };

  return (
    <div className="habitacion-con-svg">
      <h1>{personaje.nombre} está en la habitación</h1>
      
      <div className="habitacion">
        {/* Imagen aérea de la habitación */}
        <img src={habitacionAerea} alt="Habitación Aérea" className="fondo-habitacion" />
        
        {/* SVG de objetos clicables */}
        <svg className="objetos-svg" width="100%" height="100%">
          {objetos.map((objeto) => (
            <circle
              key={objeto.id}
              cx={objeto.x}
              cy={objeto.y}
              r="20"
              fill="transparent"
              stroke="red"
              strokeWidth="2"
              onClick={() => obtenerPista(objeto.id)}
            >
              <title>{objeto.nombre}</title>
            </circle>
          ))}
        </svg>
      </div>

      {pista && (
        <div className="pista">
          <h2>Pista:</h2>
          <p>{pista}</p>
        </div>
      )}
    </div>
  );
};

export default HabitacionConSVG;
