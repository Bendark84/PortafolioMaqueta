import React, { useState } from 'react';
import estilos from './Slider.module.css';

const Slider = ({ imagenes }) => {
  //https://www.npmjs.com/package/@brainhubeu/react-carousel          para installar un slider visitar pagina

  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;

  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };
  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? 1 : imagenActual - 1);
  };

  return (
    <div className={estilos.container}>
      <h3 id="imagenes">Imagenes</h3>

      <button onClick={anteriorImagen}>Atras</button>
      {imagenes.map((imagen, index) => {
        return (
          <div>
            {imagenActual === index && (
              <img key={index} src={imagen} alt="imagen" />
            )}
          </div>
        );
      })}
      <button onClick={siguienteImagen}>siguiente</button>
    </div>
  );
};

export default Slider;
