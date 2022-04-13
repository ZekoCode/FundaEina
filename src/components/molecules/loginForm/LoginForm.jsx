import React from 'react'
import TitleForm from '../../atoms/titleForm/TitleForm'
import LinkForm from '../../atoms/linkForm/LinkForm'
import './styles.css'


function LoginForm() {
  return (
    <form className='form--form'>
        <TitleForm text='Member Login'/>       

        <div className='controls'>
          <i class="bi bi-envelope-fill"></i>
          <input className="" 
            type="email" 
            name="correo" 
            id="correo" 
            placeholder="Ingrese su correo"
          />
        </div>
        
        <div className='controls'>
          <i class="bi bi-lock-fill"></i>
          <input 
            className="" 
            type="password" 
            name="contraseña" 
            id="contraseña" 
            placeholder="Ingrese su contraseña"
          />
        </div>

        <button className='btn--submit' type='submit'>Login</button>

        <p className='link--p'> 
            Forgot <LinkForm text='Username' link='#'/> <LinkForm text='Password?' link='#'/> 
            <br />
            <br />
            <LinkForm text='Create tu cuenta'/>
        </p>
        
        
    </form>
  )
}

export default LoginForm