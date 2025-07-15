import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Medicos from './pages/Medicos'
import Login from './pages/Login'
import Signin from './pages/Signin'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import MiPerfil from './pages/MiPerfil'
import MisConsultas from './pages/MisConsultas'
import Consulta from './pages/Consulta'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/medicos' element={<Medicos />} />
        <Route path='/medicos/:especialidad' element={<Medicos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/mi-perfil' element={<MiPerfil />} />
        <Route path='/mis-consultas' element={<MisConsultas />} />
        <Route path='/consulta/:docId' element={<Consulta />} />
      </Routes>
    </div>
  )
}

export default App
