import React, { useState } from "react";

// Importar las imágenes de los frames
import frame1 from "../../assets/images/sprites/cajon_1.png";
import frame2 from "../../assets/images/sprites/cajon_2.png";
import frame3 from "../../assets/images/sprites/cajon_3.png";
import frame4 from "../../assets/images/sprites/cajon_4.png";

const frames = [frame1, frame2, frame3, frame4]; // Array con los frames

const Drawer = () => {
  const [currentFrame, setCurrentFrame] = useState(0); // Estado del frame actual

  const handleClick = () => {
    setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length); // Avanza y regresa a 0
  };

  return (
    <img
      src={frames[currentFrame]} // Muestra la imagen actual
      alt="Cajón animado"
      onClick={handleClick} // Cambia la imagen con clic
      style={{ width: "128px", height: "128px", cursor: "pointer", border: "1px solid black" }}
    />
  );
};

export default Drawer;
