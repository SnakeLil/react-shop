import React from 'react'
import { Link } from 'react-router-dom';
import './Card.scss'
export default function Card(props) {
    const item = props.item;
    const mainImgdata =process.env.REACT_APP_UPLOAD_URL+ props.item?.attributes?.img?.data?.attributes?.url
    const Imgdata2 =process.env.REACT_APP_UPLOAD_URL+ props.item?.attributes?.img2?.data?.attributes?.url
    
    return (
        <Link to={`/product/${item.id}`}>
            <div className='item'>
                <div className='imgbox'>
                <img src={mainImgdata} className='img1'></img>
                {Imgdata2?<img src={Imgdata2} className='img2'></img>:null}

                </div>
                
                <p>{item?.attributes?.title}</p>
                <span className='oldprice'>${item?.attributes?.oldPrice || item?.attributes?.price+99} </span><span> ${item?.attributes?.price}</span>
                {item?.attributes?.isNew ? <span className='newProduct'>newProduct</span> : null}
            </div>
        </Link>

    )
}
