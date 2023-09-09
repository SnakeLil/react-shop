import React, { useState } from 'react'
import './Products.scss'
import List from '../List/List'
import { useParams } from 'react-router'
import useFetch from '../../hooks/useFetch'
export default function Products() {
    const productsId = +useParams().id
    // 子类别 checkbox选择
    const [selectedSub, setSelectedSub] = useState([])
    // 价格选择
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState('asc')

    // sub-category
    const { data, loading, error } = useFetch(`/sub-categories?populate=*&filters[categories][id][$eq]=${productsId}`)

    const subChangHandler = (e)=>{
        const value = e.target.value
        const isChecked = e.target.checked
        setSelectedSub(isChecked?[...selectedSub,value]:selectedSub.filter(item=>item!==value))
    }
    const changeRangeHandler = (e)=>{
        
        const timer =  setTimeout(() => {
            clearTimeout(timer)
            setMaxPrice(e.target.value)
        }, 1000);
    }
    return (
        <div className='products'>
            <div className='left'>
                <div className='filterItem'>
                    <h3>Products Catergories</h3>
                    {data.map(item => {
                        return <div className='inputItem' key={item.id}>
                            <input type='checkbox' id={item.id} value={item.id}
                            onChange={subChangHandler}
                            ></input>
                            <label htmlFor={item.id}>{item?.attributes?.title}</label>
                                </div>
                    })}


                </div>
                {/* 2 */}
                <div className='filterItem'>
                    <h3>Filter By Price</h3>
                    <div className="inputItem">
                        <span>0</span>
                        <input type='range' min={0} max={1000}
                            onChange={changeRangeHandler}
                        ></input>
                        <span>{maxPrice}</span>
                    </div>

                </div>
                {/* 3 */}
                <div className='filterItem'>
                    <h3>Sort By ?</h3>
                    <div className="inputItem">
                        <input type='radio' id='asc' value='asc' name='price'
                            onChange={(e) => setSort(e.target.value)}
                        ></input>
                        <label htmlFor='asc'>Lowest first</label>
                    </div>
                    <div className="inputItem">
                        <input type='radio' id='desc' value='desc' name='price'
                            onChange={(e) => setSort(e.target.value)}
                        ></input>
                        <label htmlFor='desc'>Highest first</label>
                    </div>

                </div>
            </div>
            <div className='right'>
                <div className='imgbox'>
                    <img src='https://css.beautifulhalo.com/images/index_banners/20220120/1642671342_790.jpg'></img>
                </div>


                <List
                    data={data}
                    sort={sort}
                    productsId={productsId}
                    maxPrice={maxPrice}
                    selectedSub={selectedSub}
                ></List>

            </div>
        </div>
    )
}
