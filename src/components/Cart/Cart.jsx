import React from 'react'
import './Cart.scss'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, resetCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router';
import { useGetCartProductsQuery } from '../../redux/api/cartApi';
import { useGetUserQuery, useLoginMutation } from '../../redux/api/authApi';
export default function Cart(props) {
    const products = useSelector(state => state?.cart?.products)
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const userId = auth.user?.id
    const totalPrice = ()=>{
        let total = 0
        products?.forEach(item=>{
            total += item.price * item.count
        })
        return total.toFixed(2)
    }
    const navgate = useNavigate()
    
    // 通过getuser找到当前的用户
    const user = useGetUserQuery(userId)
    //通过这个用户找到其中的cart—product，购物车数据表的id
    const cartProductId = user?.data?.cart_product?.id
    //将这个数据表id，通过cartApi，找到这个购物车表的数据
    const {data:cartData,isLoading} = useGetCartProductsQuery(cartProductId)
    //cartData?.data?.attributes?.products?.data 是购物车中的一个商品数组，
    //当点击添加购物车时，向该表的product数据其中push，创建add api
    const cartProducts = cartData?.data?.attributes?.products?.data
    // console.log(cartData?.data?.attributes?.products?.data)
    // console.log(cartData)

  return (
    <div className='cartbox' style={props.cartOpen?{display:'flex'}:{display:'none',border:'2px solid black',overflow:'hidden'}}>
        <h1>CART </h1>

        <div className='cartProducts' >
            {products?.map(item=>{
                return (
                    <div className='cartProduct' key={item.id}>
                    <div className='cartImgBox'>
                    <img src={item.img} alt=''></img>
                    </div>
                    
                    <div className='cartCenter'>
                       <h3>{item.title}</h3>
                        <p>{item?.desc}</p>
                        <span>{item.count} × ${item.price}</span>
                    </div>
                    <DeleteForeverIcon className='delete'onClick={
                        ()=>dispatch(removeFromCart(item.id))
                    }/>
                </div>
                )
            })}

        </div>
        <div className='cartTotal'>
            <span>SUB TOLTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <div className='cartBtn'>
            <button onClick={()=>{navgate('/checkout');props.setCartOpen(false)}}>PROCEED TO CHECKOUT</button>
        </div>
        <p className='restCart' onClick={()=>dispatch(resetCart())}>RESET CART</p>
    </div>
  )
}
