import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Medicos from './pages/Medicos'
import Login from './pages/Login'
import Signin from './pages/Signin'
import About from './pages/About'
import Contacto from './pages/Contacto'
import MiPerfil from './pages/MiPerfil'
import Citas from './pages/Citas'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/medicos' element={<Medicos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacto />} />
        <Route path='/mi-perfil' element={<MiPerfil />} />
        <Route path='/citas' element={<Citas />} />
      </Routes>
    </div>
  )
}

export default App
