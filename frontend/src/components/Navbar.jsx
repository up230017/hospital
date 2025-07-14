import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img src={assets.logo} alt="" />
      <ul>
        <NavLink>
          <li>Inicio</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Médicos</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Nosotros</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Contacto</li>
          <hr />
        </NavLink>
      </ul>
      <div>
        <button>Registrarse</button>
      </div>
    </div>
  )
}

export default Navbar
