//-------------------Modal para mostrar un listado de las pistas encontradas-------------------//

/* Incluye:
- Botón para abrir/cerrar el diario (siempre visible en pantalla).

- Modal o panel lateral con diseño tipo hoja o libreta.

- Lista de pistas encontradas.

- Responsive (funciona tanto en móvil como desktop).

- Persistencia con localStorage.*/
import React from "react";
import "./DiarioPistas.css";

const DiarioPistas = ({ pistas }) => {
    return (
      <div className="diario-pistas">
        <h2>Diario de Pistas</h2>
        <ul>
          {pistas.length === 0 ? (
            <li>No has encontrado ninguna pista todavía.</li>
          ) : (
            pistas.map((pista, index) => <li key={index}>{pista}</li>)
          )}
        </ul>
      </div>
    );
  };    

export default DiarioPistas;