import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Medicos from './pages/Medicos'
import Login from './pages/Login'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import MiPerfil from './pages/MiPerfil'
import MisConsultas from './pages/MisConsultas'
import Consulta from './pages/Consulta'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/medicos' element={<Medicos />} />
        <Route path='/medicos/:speciality' element={<Medicos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/my-profile' element={<MiPerfil />} />
        <Route path='/my-appointments' element={<MisConsultas />} />
        <Route path='/appointment/:docId' element={<Consulta />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
