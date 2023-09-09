import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
export default function Navbar() {
  const cartCount = useSelector(state => state?.cart?.products?.length)
  const [cartOpen, setCartOpen] = useState(false)
  const [personOpen, setPersonOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const auth = useSelector(state => state?.auth)
  const dispatch = useDispatch()
  return (
    <div className='navbar' >
      <div className='wraper'>
        {/* 左侧 */}
        <div className='left'>
          <div className='item'>
            <img src='https://img.tukuppt.com/ad_preview/01/23/49/3AG6bjdFoH.jpg!/fw/260'></img>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
          <div className='item'>
            <span >USD</span>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>Men</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1' >Women</Link>
          </div>
          {/* <div className='item'>
            <Link className='link' to='/products/1' >Children</Link>
          </div> */}
          <div className='item'>
            <Link className='link' to='/products/1' >Accessories(配饰)</Link>
          </div>

        </div>
        {/* 中间 */}
        <div className='center'>
          <Link className='link' to='/'>Lilsnake</Link>
        </div>
        {/* 右侧 */}
        <div className='right'>
{auth.isLogged?null    :      <div className='item'>

            <Link className='link' to='/login' >Login / Register</Link>

          </div>}
          <div className='item'>
            <Link className='link' to='/about' >About</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/contact' >Contact</Link>
          </div>
          {/* <div className='item'>
            <Link className='link' to='/products/1' >Stores</Link>
          </div> */}
          <div className='icons'>
            <div className='search'>
            <SearchIcon onClick={()=>{setSearchOpen(!searchOpen)}}></SearchIcon>
{searchOpen?            <div className='searchCard'>
              <input/>
              <button><SearchIcon></SearchIcon></button>
            </div>:null}
            </div>
            
            <div className='person'>
            <PersonOutlineIcon className='personicon' onClick={()=>{setPersonOpen(!personOpen)}}></PersonOutlineIcon>
            {personOpen?<div className='perosonCard'>
              {auth.isLogged?<h3><Link to='/' className='perTitle' onClick={()=>{dispatch(logout());setPersonOpen(false)}}>LOG OUT</Link></h3>:<h3><Link to='/login' className='perTitle'>LOG IN/SIGN UP</Link></h3>}
              <Link to='/'>My Orders</Link>
              <Link to='/'>My Wishlist</Link>
            </div>:null}
            </div>
            
            {auth.isLogged?<span style={{marginLeft:'-15px'}} className='usernameNavbar'>{auth.user.username}</span>:<span className='usernameNavbar'><Link to='/login' style={{color:'black',fontSize:'14px'}}>Login</Link></span>}
            {auth.isLogged&&<FavoriteBorderIcon className='favorite'></FavoriteBorderIcon>}
            {auth.isLogged&&<div className='cart' onClick={() => setCartOpen(!cartOpen)}>
              <ShoppingCartIcon className='shoppingCart'></ShoppingCartIcon>
              <span>{cartCount}</span>
            </div>}
          </div>
        </div>
        {/* 右侧 */}
      </div>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
    </div>
  )
}
