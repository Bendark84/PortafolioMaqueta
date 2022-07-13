import React from 'react';
import './Cover.css';
import imageBack from '../media/imageBack.jpg';
import matrixCover from '../media/matrixCover.mp4';

const Cover = () => {
  // Metraje de stock <a href="http://videezy.com/">Videezy!</a>

  return (
    <div className="cover-container">
      {/* <img src={imageBack} alt="" /> */}
      <video className="video" src={matrixCover} autoPlay loop muted />
      <h1>ALAN TURING</h1>
      <p>
        {' '}
        <a href="#biografia"> Biografía </a> |{' '}
        <a href="#imagenes"> Imagenes </a>| <a href="#test"> Maquina Turing </a>
        |<a href="#back"> Informacion </a>
      </p>
    </div>
  );
};

export default Cover;
