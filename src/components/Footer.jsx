import React from 'react'
import '../styles/Footer.css'
import LOGOfooter from '../assets/LOGOfooter.svg'


export default function Footer() {
  return (
    <div className='footer-container'>
        <img src={LOGOfooter} alt="logo monochrome"/>
        <p><span>©</span> 2020 Kasa. All rights reserved</p>
    </div>
  )
}