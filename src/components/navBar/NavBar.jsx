import React from 'react';
import './NavBar.css';

const NavBar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navBar ${isScrolling > 20 ? 'scrolling' : null}`}>
      <div
        className={`navbar-logo ${isScrolling > 20 ? 'scrolling' : null}`}
        onClick={toTheTop}
      >
        Home
      </div>
    </nav>
  );
};

export default NavBar;
