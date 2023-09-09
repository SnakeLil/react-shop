import React, { useState } from 'react'
import './Slider.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const imgData = [
        "https://res.litfad.com/site/img/advert/d91af46d0142461603bafd72dd39c0e6.jpg",
        "https://res.litfad.com/site/img/advert/d4690b845d50279b98dbe951a27936da.jpg",
        "https://res.litfad.com/site/img/advert/e1f97a65825a7d3cf6c5ed187af0f4db.png",
    ]
        
    const preSlide = ()=>{
        setCurrentSlide(currentSlide ===0? 2:prev=>prev-1)
        console.log(currentSlide)
    }
    const nextSlide = ()=>{
        setCurrentSlide(currentSlide ===2? 0:prev=>prev+1)
        console.log(currentSlide)
    }
  return (
    <div className='slider'>
        <div className='container' style={{ transform: `translateX(${-currentSlide*100}vw)`}}>
            <img src={imgData[0]}></img>
            <img src={imgData[1]}></img>
            <img src={imgData[2]}></img>
        </div>
        <div className='icons'>
            <div className='icon' onClick={preSlide}>
                <ArrowBackIcon/>
            </div>
            <div className='icon' onClick={nextSlide}>
                <ArrowForwardIcon />
            </div>
        </div>
    </div>
  )
}
