import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3 id="biografia">Biografía</h3>
        <p>
          <strong> Alan Mathison Turing. </strong> Pasó a la historia como uno
          de los pioneros del estudio de la lógica de los ordenadores y como uno
          de los primeros en interesarse en el tema de la inteligencia
          artificial. Nacido el 23 de junio de 1912 en Londres, inspiró los
          términos actualmente de uso común en la informática, como "máquina de
          Turing" y "prueba de Turing". Más específicamente, se puede decir que
          como matemático aplicó el concepto de algoritmo a la computadora
          digital y, su investigación de la relación entre las máquinas y la
          naturaleza, creó el campo de la inteligencia artificial. <br /> <br />
          <strong> Contribuciones de Turing </strong>
          <br /> Durante la Segunda Guerra Mundial, Turing puso sus habilidades
          matemáticas al servicio de la "Dirección General de Comunicación"
          inglesa, para descifrar los códigos utilizados en las comunicaciones
          alemanas, una tarea particularmente difícil porque los alemanes habían
          desarrollado un dispositivo pág. 7 llamado "Enigma" que era capaz de
          generar un código que cambiaba constantemente. Durante este período,
          en el "Departamento de Comunicaciones", Turing y sus compañeros
          trabajaron con una herramienta llamada "Colossus" que descifró de
          forma rápida y eficiente los códigos alemanes creados con "Enigma". Se
          trataba, en esencia, de un conjunto de servomotores y metal, pero fue
          el primer paso hacia la computadora digital.
        </p>
      </div>
      <div className="about-img">
        <img
          src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQCUUTlwrAsh5cZ9yds4YIELmAgLT-kyXXJ7vhrzQLriwYb3VQqSTToKpq7heaNcMZX"
          alt=""
        />
      </div>
    </div>
  );
};
import './About';
export default About;
