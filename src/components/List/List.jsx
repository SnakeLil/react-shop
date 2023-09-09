import React, { useEffect } from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
export default function List(props) {
  const productsId = props.productsId
  let maxPrice = props.maxPrice
  const selectedSub = props.selectedSub
  const sort = props.sort

  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${productsId}
    ${selectedSub.map(item =>`&filters[sub_categories][id][$eq]=${item}`).join('')}
    &filters[price][$lte]=${maxPrice}&sort=price:${sort}`
    )
    
  return (
    <div className='list'>
        {error?<p>oops,something error!</p>
          :
          (loading?<p>loading...</p>
           : 
           data.map(item=>{
                return <Card key={item.id} item={item} ></Card>
            })
          )
        }
    </div>
  )
}
