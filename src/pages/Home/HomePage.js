import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts'
import './home.scss'
import Catergories from '../../components/Catergories/Catergories'
import Contact from '../../components/Contact/Contact'
export default function HomePage() {
  return (
    <div className='home'>
      <Slider></Slider>
      <FeatureProducts type='feature'></FeatureProducts>
      <Catergories></Catergories>
      <FeatureProducts type='trending'></FeatureProducts>
      <Contact/>
    </div>
  )
}
