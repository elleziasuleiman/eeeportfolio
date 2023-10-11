import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Certification from './components/Work'; 
import Skills from './components/Skills';
import Journey from './components/Experience'; 
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Journey />
      </section>
      <section id="certification">
        <Certification />
      </section>
      <section id="contact">
        <Footer />
      </section>
      </div>
  );
}

export default App;
