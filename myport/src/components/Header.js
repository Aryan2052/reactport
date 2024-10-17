// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My Portfolio</h1>
      <nav style={styles.nav}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    width: '100%',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    zIndex: 1000
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem'
  },
  nav: {
    display: 'flex',
    gap: '15px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  }
};

export default Header;
