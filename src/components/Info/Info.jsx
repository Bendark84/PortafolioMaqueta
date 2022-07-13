import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        <h3 id="test">Máquina de Turing</h3>
        <br />
        <p>
          {' '}
          La máquina es un módulo de reconocimiento de lenguaje más general que
          cualquier autómata finito y de pila, pues tiene la capacidad de
          reconocer los lenguajes regulares y, los independientes de contexto,
          además de muchos otros tipos de lenguajes. La máquina de Turing es un
          dispositivo informático el cual consiste en un cabezal de lectura y
          escritura, lo que mejor conocemos hoy en día con el nombre de escáner
          y de una cinta de papel que atraviesa la máquina. Esta cinta se
          encontraba divida en cuadrados, y cada uno de ellos tenía al mismo
          tiempo un símbolo. Esta cinta era la encargada del almacenamiento de
          la máquina, y era una especie de vehículo de entrada y salida, además
          de funcionar como memoria de trabajo para almacenar los resultados de
          los pasos intermedios del cálculo. <br />
          Las principales características de la máquina de Turing eran las
          siguientes:
          <ul>
            <li>
              La entrada que tiene la cinta antes de que comience el cálculo
              debe consistir en un número finito de símbolos.
            </li>
            <li>La cinta de la máquina tiene una de longitud ilimitada.</li>
            <li>El cabezal de lectura y escritura puede ser programable.</li>
            <li>
              La máquina de Turing es capaz de hacer seis tipos de operaciones
              fundamentales: leer, escribir, mover hacia la izquierda, mover
              hacia la derecha, cambiar de estado y detenerse.
            </li>
            <li>
              Tiene la capacidad de computar cualquier cosa que cualquier
              computadora moderna pueda calcular.
            </li>
            <li>
              Está formada por un alfabeto de entrada y uno de salida y por un
              símbolo especial llamado blanco.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};
import './Info.css';
export default Info;
