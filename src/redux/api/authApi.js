import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/'
    }),
    endpoints(build) {
        return {
            register: build.mutation({
                query(user) {
                    return {
                        url: 'auth/local/register',
                        method: 'POST',
                        body: user
                    }
                }
            }),
            login : build.mutation({
                query(user){
                    return {
                        url: 'auth/local',
                        method: 'POST',
                        body: user
                    }
                }
            }),
            getUser: build.query({
                query(id){
                    return {
                        url:`users/${id}?populate=*`,
                        method: 'GET'
                    }
                }
            }),
            forgetPassword: build.mutation({
                query(email) {
                    return {
                        url:'auth/forgot-password',
                        method: 'POST',
                        body: {email:email}
                    }
                }
            })
        }
    }
})
export default authApi
export const {useRegisterMutation,useLoginMutation,useGetUserQuery,useForgetPasswordMutation} = authApi