import React, { useState } from 'react'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation,useLoginMutation } from '../../redux/api/authApi'
import { colors } from '@mui/material'
import { green } from '@mui/material/colors'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/authSlice'
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [username, setUsername] = useState('')
    const [reEmail, setReEmail] = useState('')
    const [reUsername, setReUsername] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [SuccessRegister, setSuccessRegister] = useState(false)
    const [SuccessLogin, setSuccessLogin] = useState(false)
    const [loginBy, setLoginBy] = useState(false)
    const [registerFn,{isError:reError,isLoading:reLoading,isSuccess:reSuccess}] = useRegisterMutation()
    const [loginFn,{isError:loError,isLoading:loLoading,isSuccess:loSuccess}] = useLoginMutation()
    const dispatch = useDispatch()
    const navgate = useNavigate()
    const loginHandler = (e)=>{
        // 处理登录事件
        e.preventDefault()
        loginFn({
            identifier:email,
            password:password
        }).then(res=> {
            // 登录成功的结果
            console.log(res)
            if(!res.error){
                setSuccessLogin(true) //设置登录状态显示登录成功信息
               setTimeout(() => {
                navgate('/',{replace:true})
               }, 1000);
                
                dispatch(login({
                    user:res.data.user                    ,
                    token:  res.data.jwt,
                    userId:res.data.user.id
                }))
            }
        })

    }
    const registerHandler = (e)=>{
        // 处理注册事件
        e.preventDefault()
        registerFn({
            username:reUsername,
            password:rePassword,
            email:reEmail
        }).then(res=> {
            console.log(res)
            if(!res.error) {
                console.log('注册成功')
                setReEmail('')
                setReUsername('')
                setRePassword('')
                setSuccessRegister(true)
            }else {
                alert(res.error.data.error.message)
            }
        })
}

  return (
    <div className='login'>
        <div className='loginWraper'>
        <div className='LoginLeft'>
            <form>
            <h1>LOG IN</h1>
            <div className='inputItem'>
               {loginBy?<p>User Name:</p> :<p>Email Address:</p>}
                {/* 邮箱 */}
                <input className='input' value={email} type='text' onChange={e=> setEmail(e.target.value)}></input>
            </div>
            <div className='inputItem'>
                <p>Password:</p>
                {/* 密码 */}
                <input className='input' value={password} type='password' onChange={e=>setPassword(e.target.value)}></input>
            </div>
            <span><Link to='/forgetPassword'>Forgot Your Password?</Link></span>
            <button className='btn loginIn' onClick={loginHandler}>Login</button>
            <button className='btn loginByUn' onClick={(e)=>{e.preventDefault();setLoginBy(!loginBy);}}>{loginBy?'Login By Email' : 'Login By Username'}</button>
            {SuccessLogin&&<p style={{color:'green'}}>You successfully logged in !</p>}
            </form>
        </div>
        {/* 注册 */}
        <div className='LoginRight'>
        <form>
            <h1>SIGN UP</h1>
            <div className='inputItem'>
                <p>User Name:</p>
                <input className='input' value={reUsername} type='text' onChange={e=> setReUsername(e.target.value)}></input>
            </div>
            <div className='inputItem'>
                <p>Email Address:</p>
                <input className='input' value={reEmail} type='text' onChange={e=> setReEmail(e.target.value)}></input>
            </div>
            <div className='inputItem'>
                <p>Password:</p>
                <input className='input' value={rePassword} type='password'onChange={e=>setRePassword(e.target.value)}></input>
                <p>Your Password must more than 6 characters.</p>
            </div>
            {/* <div className='inputItem'>
                <p>Confirm Password:</p>
                <input className='input' type='password'></input>
            </div> */}
            <button className='btn' onClick={registerHandler}>Register</button>
            {SuccessRegister&&<p style={{color:'green'}}>You have successfully registered ! ! </p>}
            </form>
        </div>
        </div>

    </div>
  )
}
