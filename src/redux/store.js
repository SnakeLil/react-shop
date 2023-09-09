import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import authApi from './api/authApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import authSlice from './authSlice'
import cartApi from './api/cartApi'
const store =  configureStore({
   
    reducer:{
        cart:cartSlice,
        auth:authSlice.reducer,
        [authApi.reducerPath]:authApi.reducer,
        [cartApi.reducerPath]:cartApi.reducer,
    },
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware,cartApi.middleware)
})
setupListeners(store.dispatch)
export default store