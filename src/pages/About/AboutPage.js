import React from 'react'
import './AboutPage.scss'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
export default function AboutPage() {
    return (
        <div className='aboutMain'>
            <div className='ctWraper'>
                <div className='contactLeft'>
                    <h2>About Us</h2>
                    <p className='lilsnake'>——Lilsnake——</p>
                    <p>We believe in delivering excellent customer service and we are dedicated to satisfying our customers. If you have any questions, comments or suggestions, feel free to contact us! Get in touch! We would love to hear from you. We've partnered with Klarna to provide you with easy payment options at checkout. Find out more about Klarna instalment payment service here.</p>
                    <h3> LIVE CHAT</h3>
                    <p>24*7 hours always at your service. click "<Link to='/'>Chat with us</Link>" in the bottom right of the page.</p>
                    <h3>OUR EMAIL</h3>
                    <p>You can contact our customer team: lilsnake239299@gmail.com</p>
                    {/* <h3>COPYRIGHT</h3>
                    <p>Any copyright question? Click here</p> */}
                </div>
                <div className='contactRight'>
                    {/* <div className='inputBox'>
                        <input type='text' placeholder='sfsd'/>
                        <SearchIcon className='contactSearch' />
                    </div>
                    <ul>
                        <li><Link to='/'>Related Articles</Link></li>
                        <li><Link to='/'>Terms & Conditions</Link></li>
                        <li><Link to='/'>Privacy Policy</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                        <li><Link to='/'>LIVE CHAT</Link></li>
                    </ul> */}
                </div>
            </div>

        </div>
    )
}
