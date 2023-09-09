import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useParams } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { useGetUserQuery } from '../../redux/api/authApi';
import { useAddCartProductMutation, useGetCartProductsQuery } from '../../redux/api/cartApi';
export default function Product() {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const id = useParams().id
    const [imgIndex, setImgIndex] = useState(0)
    const { data, loading, error } = useFetch(
        `/products/${id}?populate=*`
    )

    const auth = useSelector(state => state.auth)
    const userId = auth.user?.id
    // 通过getuser找到当前的用户
    const user = useGetUserQuery(userId)
    //通过这个用户找到其中的cart—product，购物车数据表的id
    const cartProductId = user?.data?.cart_product?.id
    //将这个数据表id，通过cartApi，找到这个购物车表的数据
    const { data: cartData, isLoading } = useGetCartProductsQuery(cartProductId)
    //cartData?.data?.attributes?.products?.data 是购物车中的一个商品数组，
    //当点击添加购物车时，向该表的product数据其中push，创建post api
    const cartProducts = cartData?.data?.attributes?.products?.data
    // console.log(cartData?.data?.attributes?.products?.data)
    // console.log(cartData)


    const [addCartProduct,cartProductData] = useAddCartProductMutation()
    console.log(cartProductData)
    
    const imgdata = process.env?.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url
    const imgdata2 = process.env?.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url
    const img = [imgdata, imgdata2]

    const [count, setCount] = useState(1)
    const addHandler = () => {
        dispatch(addToCart(
            {
                id: data?.id,
                title: data?.attributes?.title,
                desc: data?.attributes?.desc,
                price: data?.attributes?.price,
                img: process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url,
                count: count
            }
        ))
        addCartProduct(cartProductId,data).then(res => {
            console.log(res)
            const cartProductsData = res?.data?.data?.attributes?.products?.data
            
            
            // cartProductsData.push(data)
        })

        // console.log(products)
    }
    return (
        loading
            ? <p>loading...</p> : (<div className='product'>
                <div className='left'>
                    <div className='imgs'>
                        <img src={imgdata} alt='' onClick={() => setImgIndex(0)}></img>
                        <img src={imgdata2} alt='' onClick={() => setImgIndex(1)}></img>
                    </div>

                    <div className='mainImg'>
                        <img src={img[imgIndex]} alt=''></img>
                    </div>
                </div>
                <div className='right'>
                    <h3 className='title'>{data?.attributes?.title}</h3>
                    <span className='price'>${data?.attributes?.price}</span>
                    <p className='content'>{data?.attributes?.desc}</p>
                    {/* 计数器 */}
                    <div className='counter'>
                        <button
                            onClick={e => setCount(pre => pre > 1 ? pre - 1 : pre)}
                        >-</button>
                        <span>{count}</span>
                        <button
                            onClick={e => setCount(pre => pre + 1)}
                        >+</button>
                    </div>
                    {/* 添加按钮 */}
                    <button className='add' onClick={addHandler}>
                        <AddShoppingCartIcon />ADD TO CART
                    </button>
                    <Link to='' className='link'>
                        <div className='item'>
                            <FavoriteBorderIcon />
                            ADD TO WISHLIST
                        </div>
                    </Link>
                    <Link to='' className='link'>
                        <div className='item'>
                            <CompareArrowsIcon />
                            ADD TO COMPARE
                        </div>
                    </Link>

                    <div className='info'>
                        <span>isNew:{'' + data?.attributes?.isNew}</span>
                        <span>OldPrice:{data?.attributes?.oldPrice}</span>
                        <span>category:{data?.attributes?.sub_categories?.data[0]?.attributes?.title}</span>
                    </div>
                    <hr />
                    <div className='details'>
                        <span>VeVendernder</span>
                        <hr />
                        <span>Vender:polor</span>

                    </div>
                </div>
            </div>)
    )
}
