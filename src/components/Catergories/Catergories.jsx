import React from 'react'
import './Catergories.scss'
import { Link } from 'react-router-dom'
export default function Catergories() {
  return (
    <div className='catergories'>
      <div className='wraper'>
{/* 左 */}
        <div className='left'>
          <div>
            <img src='https://gw.alicdn.com/bao/upload/O1CN01HelEry1Q8u1H9tlva_!!6000000001932-0-yinhe.jpg_Q75.jpg'></img>
            <button><Link to='/products/2'>New Products</Link></button>
          </div>
          <div>
            <img src='https://gw.alicdn.com/bao/upload/O1CN01ocScvo1siuOTF5ByM_!!6000000005801-0-yinhe.jpg_Q75.jpg'></img>
            <button><Link to='/products/2'>WOMEN</Link></button>
          </div>
        </div>
{/* 中 */}
        <div className='center'>
          <div>
            <img src='https://img.alicdn.com/imgextra/i1/2212864825038/O1CN01ijRKVh1n5SBSu41Po_!!2212864825038.jpg_400x400.jpg'></img></div>
          <button><Link to='/'>NEWSEASON</Link></button>
        </div>
{/* 右 */}
        <div className='right'>
          <div className='top'>
            <div>
              <img src='https://gdp.alicdn.com/imgextra/i4/56569813/O1CN01kAdA2v2MMPBUZgM3r_!!56569813.jpg'></img>
              <button><Link to='/products/1'>Accessories</Link></button>
            </div>

            <div>
              <img src='https://gdp.alicdn.com/imgextra/i3/56569813/O1CN01PHUxcK2MMPBLzrsbN_!!56569813.jpg'></img>
              
            </div>
          </div>
          <div className='btm'>
            <div><img src='https://gdp.alicdn.com/imgextra/i4/56569813/O1CN01KrmP622MMPBUOHUwQ_!!56569813.jpg'></img></div>
          </div>
        </div>
      </div>
    </div>
  )
}
