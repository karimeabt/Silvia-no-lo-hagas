import React, { useState } from "react";
import "./Habitacion.css";
import DiarioPistas from "./DiarioPistas";

// Importar las imágenes de los frames
import cajon_cerrado from "../../assets/images/sprites/cajon_cerrado.png";
import cajon_abierto from "../../assets/images/sprites/cajon_abierto.png";


export default function Habitacion() {
  // Estado del Cajon
  const [cajon_abiertoEstado, setcajon_abiertoEstado] = useState(false);

  const handleClickBuro = () => {
    //Si se hace clic en el buro == estado abiertos
    setcajon_abiertoEstado(!cajon_abiertoEstado);

    // Simula encontrar una pista
    if (!cajon_abiertoEstado) {
      setPistas([...pistas, "Has encontrado una nota misteriosa."]);
    }
  };

  // Estado del Diario de pistas
   const [mostrarDiario, setMostrarDiario] = useState(false);
   const [pistas, setPistas] = useState([]);

  const toggleDiario = () => {
    setMostrarDiario(!mostrarDiario);
  };

  return (
    <div className="habitacion">

      {/* Imagen del buró que cambia al hacer clic */}
      <img
        src={cajon_abiertoEstado ? cajon_abierto : cajon_cerrado}
        alt="Buró"
        className="buro"
        onClick={handleClickBuro}
      />

       {/* Botón para abrir/cerrar el diario */}
       <button className="boton-diario" onClick={() => setMostrarDiario(!mostrarDiario)}>
        {mostrarDiario ? "Cerrar diario" : "Abrir diario"}
      </button>

      {/* Diario de pistas */}
      {mostrarDiario && <DiarioPistas pistas={pistas} />}
    </div>

    
  );
}


