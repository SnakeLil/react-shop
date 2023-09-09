import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

export default function Contact() {
  return (
    <div className='contact'>
        <div className='wraper'>
            <span>BE INTOCH WITH US:</span>
            <div className='email'>
                <input placeholder='Enter your email...'></input>
                <button className="submail">JOIN US</button>
            </div>
        <div className='icons'>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
        <GoogleIcon/>
        </div>

        </div>
    </div>
  )
}
