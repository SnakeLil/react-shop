import React, {  useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/Home/HomePage'
import ProductsPage from './pages/Products/ProductsPage'
import ProductPage from './pages/Product/ProductPage'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './app.scss'
import LoginPage from './pages/Login/LoginPage'
import ContactPage from './pages/Contact/ContactPage'
import AboutPage from './pages/About/AboutPage'
import CheckoutPage from './pages/Checkout/CheckoutPage'
import RePasswordPage from './pages/RePassword/RePasswordPage'
import ForgetPasswordPage from './pages/RePassword/ForgetPasswordPage'



export default function App() {
 
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/rePassword' element={<RePasswordPage/>}></Route>
        <Route path='/forgetPassword' element={<ForgetPasswordPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/products/:id' element={<ProductsPage/>}></Route>
        <Route path='/product/:id' element={<ProductPage/>}></Route>
        <Route path='/checkout' element={<CheckoutPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}
