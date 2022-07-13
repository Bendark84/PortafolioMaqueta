import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2 id="info">Alan Turing</h2>
        <p>
          fue un matemático, lógico, informático teórico, criptógrafo, filósofo
          y biólogo teórico británico. Está considerado uno de los padres de la
          ciencia de la computación y precursor de la informática moderna
        </p>
      </div>
      <div className="footer-contact">
        <h3>Puedes encontrar mas informacion de Alan turing visitando</h3>
        <a
          href="https://es.wikipedia.org/wiki/Alan_Turing"
          target="blank"
          rel="noreferrer"
        ></a>
        {/* <i class="fa-brands fa-wikipedia-w"></i> */}

        <a href="">Wikipedia Alan turing</a>
      </div>
      <div className="footer-sns">
        <div className="desin-by">
          <p>Web Site realizado por alumnos de UCENM</p>
        </div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-twitter-square twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
