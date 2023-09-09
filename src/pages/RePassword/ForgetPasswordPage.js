import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForgetPasswordMutation } from '../../redux/api/authApi'

export default function ForgetPasswordPage() {
    const [email,setEmail] = useState('')
    const [sentSuccess,setSentSuccess] = useState(false)
    const [forgetPassword,data] = useForgetPasswordMutation()
    const navgate = useNavigate()
    const resetPasswordHandler = (e)=>{
        e.preventDefault()
        //接收邮箱，发送请求发送重置密码链接
        // forgetPassword(email).then(response => {
        //   console.log(response);
        //   setSentSuccess(true)
        // })
        axios
        .post('http://localhost:1337/api/auth/forgot-password', {
          email: email, // user's email
        })
        .then(response => {
          console.log('Your user received an email');
          navgate('/wait')
        })
        .catch(error => {
          console.log('An error occurred:', error.response);
        });
    }
  return (
    <div>
         <div className='rePassword'>
            <div className='login'>
                <div className='loginWraper'>
                    <div className='LoginLeft reset'>
                        <form>
                            <h1>Forget Password</h1>
                            <div className='inputItem'>
                                <p>Email Address:</p>
                                {/* 邮箱 */}
                                <input className='input' type='email'
                                value={email}
                                placeholder='Please enter the email address of your account'
                                onChange={e=>setEmail(e.target.value)}
                                ></input>
                            </div>

                            <span><Link to='/contact'>Email address not available?</Link></span>
                            <button className='btn loginIn' 
                            onClick={resetPasswordHandler}
                            >Send verification code</button>
                            
                            
                        </form>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}
