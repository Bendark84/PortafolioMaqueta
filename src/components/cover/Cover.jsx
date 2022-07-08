import React from 'react';
import "./Cover.css";
import imageBack from "../media/imageBack.jpg";
import matrixCover from "../media/matrixCover.mp4"

const Cover = () => {

    // Metraje de stock <a href="http://videezy.com/">Videezy!</a>



    return (
        <div className='cover-container'>
            {/* <img src={imageBack} alt="" /> */}
            <video className='video' src={matrixCover} autoPlay  loop muted  />
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>  Lorem, ipsum. | Lorem, ipsum. | Lorem, ipsum dolor. | Lorem, ipsum.</p>

            
        </div>
    );
};

export default Cover;