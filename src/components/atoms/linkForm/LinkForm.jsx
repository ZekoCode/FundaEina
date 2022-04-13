import React from 'react'
import './style.css'

function LinkForm({link,text}) {
  return (
    <a className="form--link" href={link}>{text}</a>
  )
}

export default LinkForm