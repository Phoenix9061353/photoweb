import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import './styles/style.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/photoweb/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
