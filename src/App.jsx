import { useState, useEffect } from 'react'
import './App.css'
import Cover from './components/cover/Cover'
import NavBar from './components/navBar/NavBar'
import React from 'react'
import About from './components/About/About'
import Slider from './components/Slider'
import Info from './components/Info/Info'
import Footer from './components/Footer/Footer'

function App() {

  const [scrollHeigth, setScrollHeigth] = useState(0);

  const mockImages = [
   " https://picsum.photos/id/1020/400",
   " https://picsum.photos/id/1025/400",
   " https://picsum.photos/id/1026/400",
   
  ];

  const handleScroll = () =>{
        const position = window.pageYOffset;
        setScrollHeigth(position);

  }

  useEffect(() =>{
      window.addEventListener("scroll", handleScroll);

  },[scrollHeigth])
 

  return (
    <div className="App">
      
      <NavBar isScrolling={scrollHeigth} />
      <Cover />
      <About />
      <Slider  imagenes={mockImages}/>
      <Info />npm
      <Footer />
    </div>
  )
}

export default App
