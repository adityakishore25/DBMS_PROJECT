import React from 'react';
import Navbar from './components/Navbar';
import Citations from './pages/Citations';
import Authors from './pages/Authors';
import Journel from './pages/Journel';
import { Routes,Route } from 'react-router-dom';
import About from './pages/About';

export default function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
          <Route path='/journel' element={<Journel/>}/>
          <Route path='/citations' element={<Citations/>}/> 
          <Route path='/authors' element={<Authors/>}/> 
          <Route path='/aboutus' element={<About/>}/>
        </Routes>
    </div>
  )
}

