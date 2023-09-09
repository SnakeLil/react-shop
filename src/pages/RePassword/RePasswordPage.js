import React, { useState } from 'react'
import './RePassword.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function RePasswordPage() {
    const [password, setPassword] = useState('')
    const navgate = useNavigate()
    const resetPasswordHandler = (e)=>{
        e.preventDefault()
        //重置密码
        axios.post('http://localhost:1337/api/auth/reset-password', {
            code: 'privateCode', // code contained in the reset link of step 3.
            password: password,
            passwordConfirmation: password,
          })
          .then(response => {
            console.log("Your user's password has been reset.");
            //跳转到登录页面
            navgate('/login',{replace:true})
          })
          .catch(error => {
            console.log('An error occurred:', error.response);
          })


        

    }
    return (
        <div className='rePassword'>
            <div className='login'>
                <div className='loginWraper'>
                    <div className='LoginLeft reset'>
                        <form>
                            <h1>Reset Password</h1>
                            <div className='inputItem'>
                                <p>Password:</p>
                                {/* 邮箱 */}
                                <input className='input' type='email'
                                value={password}
                                placeholder='Please enter the your new password'
                                onChange={e=>setPassword(e.target.value)}
                                ></input>
                            </div>

                        
                            <button className='btn loginIn' 
                            onClick={resetPasswordHandler}
                            >CONFIRM</button>
                            
                            
                        </form>
                    </div>


                </div>

            </div>
        </div>
    )
}
