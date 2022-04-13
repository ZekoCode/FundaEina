import React from 'react'
import ImageForm from '../../atoms/imageForm/ImageForm'
import LoginForm from '../../molecules/loginForm/LoginForm'
import './styles.css'

function LoginSections() {
    const imgUrl='https://imgs.search.brave.com/mFMExxf9EP0wZ9wQ_fa_EFEOMs6ztsSQHXX19qzfwIM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzM1/Ni81Njcvb3JpZ2lu/YWwvdmVjdG9yLWxh/cHRvcC1pY29uLmpw/Zw'

  return (
    <div className='login--container'>
        <ImageForm url={imgUrl} alt='Icono'/>
        <LoginForm/>
    </div>

  )
}

export default LoginSections

