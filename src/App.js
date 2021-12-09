import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/projects';
import About from './pages/about';
import Goals from './pages/goals';

function App() {
  return (
    <>
      <Navbar />
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
