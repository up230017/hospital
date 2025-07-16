import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to={'/'}>
          <li className='py-1'>Inicio</li>
          <hr className='border-none outline-none h-0.5 bg-teal-500 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/medicos'}>
          <li className='py-1'>Médicos</li>
          <hr className='border-none outline-none h-0.5 bg-teal-500 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/nosotros'}>
          <li className='py-1'>Nosotros</li>
          <hr className='border-none outline-none h-0.5 bg-teal-500 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/contacto'}>
          <li className='py-1'>Contacto</li>
          <hr className='border-none outline-none h-0.5 bg-teal-500 w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex item-canter gap-4'>
        {
          token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>Mi Perfil</p>
                <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>Mis Consultas</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Cerrar Sesión</p>
              </div>
            </div>
          </div>
          :<button onClick={()=>navigate('/login')} className='bg-teal-500 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Acceder</button>
        }
      </div>
    </div>
  )
}

export default Navbar
