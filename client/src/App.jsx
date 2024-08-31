import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Charts from './pages/Charts'
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
    <div className="transition-transform duration-300 ease-in-out" style={{ marginLeft: isOpen ? '16rem' : '0' }}>
    <Header isOpen={isOpen} toggleMenu={toggleMenu} />
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/about" element ={<About />} />
      <Route path="/charts" element = {<Charts/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}
