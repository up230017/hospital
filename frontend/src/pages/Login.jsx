import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
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
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.email)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Contraseña</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.password)} value={password} required />
        </div>
        <button className='bg-jungle-green text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Crear Cuenta" : "Iniciar Sesión"}</button>
        {
          state === "Sign Up"
            ? <p>¿Ya tienes una cuenta? <span onClick={() => setState('Login')} className='text-jungle-green underline cursor-pointer'>Inicie sesión aquí</span></p>
            : <p>¿Crear una nueva cuenta? <span onClick={() => setState('Sign Up')} className='text-jungle-green underline cursor-pointer'>Registrese Aquí</span></p>
        }
      </div>
    </form>
  )
}

export default Login