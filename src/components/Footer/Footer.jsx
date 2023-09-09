import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h2>Catergories</h2>
          <Link to='/produts/1'>Women</Link>
          <Link to='/produts/1'>Man</Link>
          <Link to='/produts/1'>Shoes</Link>
          <Link to='/produts/1'>Accessories</Link>
        </div>
        <div className='item'>
          <h2>Catergories</h2>
          <Link to='/produts'>Women</Link>
          <Link to='/produts'>Man</Link>
          <Link to='/produts'>Shoes</Link>
          <Link to='/produts'>Accessories</Link>
        </div>
        <div className='item'>
          <h2>About</h2>
          <span>Lorem ipsum dolor sit amet conse ctetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore. Lorem ipsum dolor sit amet conse cteturadipisicing elit, seddo eiusmod tempor incididunt utlabore etdolore.</span>
        </div>
        <div className='item'>
          <h2>Contact</h2>
          <span>Lorem ipsum dolor sit amet conse ctetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore. Lorem ipsum dolor sit amet conse cteturadipisicing elit, seddo eiusmod tempor incididunt utlabore etdolore.</span>
        </div>
      </div>
      <div className='bottom'>
        
        <div className='left'>
          <span className='lilsnake'>Lilsnake</span>
          <span>@Copyright 2023.All Rights Reserved</span>
        </div>
        <div className='right'>
          <img src='/img/payment.png'></img>
        </div>

      </div>
    </div>
  )
}
