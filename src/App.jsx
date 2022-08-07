import { useState, useEffect } from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import NavBar from './components/navBar/NavBar';
import React from 'react';
import About from './components/About/About';
import Slider from './components/Slider';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Back from './components/Back/Back';

function App() {
  const [scrollHeigth, setScrollHeigth] = useState(0);

  const mockImages = [
    ' https://www.biografiasyvidas.com/biografia/t/fotos/turing.jpg',
    ' https://i.pinimg.com/originals/47/a4/0c/47a40c661f7911dc48ceb093bfb305fc.jpg',
    ' https://historia-biografia.com/wp-content/uploads/2017/06/683996f8de985338b24566bbe62876a7.jpg',
    'https://okdiario.com/img/2017/08/29/alan-turing-enigma-bletchley-park-655x368.jpg',
  ];

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeigth(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeigth]);

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeigth} />
      <Cover />
      <About />
      <Slider imagenes={mockImages} />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
