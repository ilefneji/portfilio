import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
