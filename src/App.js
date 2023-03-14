import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/header/Home/Home';
import About from './components/header/about/About';
import Skills from './components/header/skills/Skills';
import Qualification from './components/header/qualification/Qualification';
import Contact from './components/header/contact/Contact';
import Footer from './components/header/footer/Footer';
import Scrollup from './components/header/scrollup/Scrollup';


function App() {
  return (
    <>
    
    <Header />

    <main className='main'>
    <Home />
    <About />
    <Skills />
    <Qualification />
    <Contact />
    </main>
    <Footer />
    <Scrollup />
   
  </>
  );
}

export default App;
