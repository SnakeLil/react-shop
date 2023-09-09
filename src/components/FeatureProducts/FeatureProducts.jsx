import React, { useEffect, useState } from 'react'
import './FeatureProducts.scss'
import Card from '../Card/Card'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'
export default function FeatureProducts(props) {
    const type = props.type


    const{data,loading,erro} = useFetch(`/products?populate=*&filters[type][$eq]=${type}`)
  return (
    <div className='featureProducts'>
        <div className='top'>
            <h1>{props.type} Products</h1>
            <span>FFeatureFeaturFeatureeFFFeatureFeaturFeatureeFeaFeaturetFeaturFeatureeureeaFeatureFFeatureFeaturFeatureeFFFeatureFeaturFeatureeFeaFeaturetFeaturFeatureeureeaFeaturetFeaturFeatureeuretFeaturFeatureeure ProductseatFeature Productsure Products</span>
        </div>
        <div className='bottom'>
        {erro?<p>some thing erro!</p>:
        (loading?
         <p>loading....</p>
         : data?.map((item) => {
            return (
                <Card item={item} key={item.id}></Card>
            )
        }))}

        </div>
    </div>
  )
}
