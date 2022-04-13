import React from 'react'
import TitleForm from '../../atoms/titleForm/TitleForm'
import './styles.css'


function LoginForm() {
  return (
    <form className='form--form'>
        <TitleForm text='Iniciar Sesion'/>       

        <div className='controls'>
          <i class="bi bi-envelope-fill"></i>
          <input className="" 
            type="cedula" 
            name="cedula" 
            id="cedula" 
            placeholder="Ingrese su cedula..."
          />
        </div>
        
        <div className='controls'>
          <i class="bi bi-lock-fill"></i>
          <input 
            className="" 
            type="password" 
            name="contraseña" 
            id="contraseña" 
            placeholder="Ingrese su contraseña..."
          />
        </div>

        <button className='btn--submit' type='submit'>Login</button>
        
    </form>
  )
}

export default LoginForm