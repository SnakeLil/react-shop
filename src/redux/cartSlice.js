import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        products:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
    },
    
    reducers:{
        // 添加购物车
        addToCart: (state, action) => {
            const item = state.products?.find(item => item.id === action.payload.id)
           if(item){
                item.count+=action.payload.count
           }else {
               state.products?.push(action.payload)
           }
           localStorage.setItem('cart',JSON.stringify(state.products))

        },
        // 移除购物车
        removeFromCart: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
            localStorage.setItem('cart',JSON.stringify(state.products))
        },
        // 清空购物车
        resetCart: (state) => {
            state.products = []
            localStorage.removeItem('cart')
        }
},
})
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions
export default cartSlice.reducer