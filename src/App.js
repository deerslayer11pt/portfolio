import React, {useState, useEffect} from 'react'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/projects';
import About from './pages/about';
import Goals from './pages/goals';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      };
    };

    window.addEventListener('resize',hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/goals" element={<Goals/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
