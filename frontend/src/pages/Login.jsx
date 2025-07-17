import React, { useEffect, useState } from 'react'
import {login, register} from '../services/auth'
import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  // const { loadUserProfileData } = useContext(AppContext)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (state == 'Login'){
      try {
        console.log(email, password);
        const data = await login(email, password);
        console.log('Usuario autenticado:', data);
        // loadUserProfileData(email);
        // navigate('/my-profile')
        // Aquí podrías guardar token, redirigir, etc.
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    } else {
      try {
        const data = await register(name, email, password);
        console.log('Usuario Registrado:', data);
      } catch (error) {
        console.error('Error al Registrar:', error);
      }
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    handleSubmit()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Crear Cuenta" : "Iniciar Sesión"}</p>
        <p>Por favor ingrese para agendar una consulta</p>
        {
          state === "Sign Up" &&
          <div className='w-full'>
            <p>Nombre Completo</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Contraseña</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button onClick={(e) => {onSubmitHandler(e)}} className='bg-teal-500 text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Crear Cuenta" : "Iniciar Sesión"}</button>
        {
          state === "Sign Up"
            ? <p>¿Ya tienes una cuenta? <span onClick={(e) => {setState('Login'); }} className='text-jungle-green underline cursor-pointer'>Inicie sesión aquí</span></p>
            : <p>¿Crear una nueva cuenta? <span onClick={(e) => {setState('Sign Up');}} className='text-jungle-green underline cursor-pointer'>Registrese Aquí</span></p>
        }
      </div>
    </form>
  )
}

export default Login