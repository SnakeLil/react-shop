import React from 'react'
import './Checkout.scss'
export default function Checkout() {
    return (
        <div className='Checkout'>
            <h2 className='checkTitle'>Checkout</h2>
            <div className='checkBox'>


                <div className='checkLeft'>

                    <table className='top'>
                        <thead>
                            <tr>
                                <th><input type='checkbox' className='checkinput' />Select all</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                    </table>
                    <div className='btm'>
                        <tbody>
                            <tr>
                                <th>
                                    <div className='imgBox'>
                                        <img src='https://res.litfad.com/site/img/item/2022/05/19/4694667/280x280.jpg'></img>
                                    </div>
                                </th>
                                <th>
                                    <div className='item'>
                                        <h3>eveless Slim Fieveless Slim Fi</h3>
                                        <p>Retro Men's Vest Contrast Color Vintage Pattern V-Neck Sleeveless Slim Fit Vest</p>

                                        <a>delete</a>
                                    </div>
                                </th>
                                <th>
                                    <span>$112</span>
                                </th>
                                <th>
                                    <div className='counter'>
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </th>
                                <th>
                                    <span>$224</span>
                                </th>
                            </tr>
                        </tbody>
                    </div>
                </div>
                <div className='checkRight'>
                    1
                </div>
            </div>
        </div>
    )
}
