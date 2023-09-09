import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cartApi = createApi({
    reducerPath:'cartApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:1337/api/cart-products/'
    }),
    endpoints(build) {
        return {
            getCartProducts:build.query({
                query(id){
                    return {
                        url:`${id}?populate=*`,
                        method:'GET'
                    }
                }
            }),
            addCartProduct:build.mutation({
                query(id,product){
                    return {
                        url:`${id}?populate=products`,
                        method:'PUT',
                        body:{data:{
                            id:id,
                            attributes:{
                                products:{
                                    data:[product],
                                }
                            }
                        }},

                    }
                }
            })
        }
    }
})
export const { useGetCartProductsQuery,useAddCartProductMutation } = cartApi
export default cartApi