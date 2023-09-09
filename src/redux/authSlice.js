import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:JSON.parse(localStorage.getItem('user')),
        isLogged:localStorage.getItem('token')?true:false,
        token:localStorage.getItem('token')
    },
    reducers:{
        login(state,action){
            state.isLogged=true;
            state.user=action.payload.user;
            state.token=action.payload.token;
            localStorage.setItem('user',JSON.stringify(state.user));
            localStorage.setItem('token',state.token);

        },

        logout(state){
            state.isLogged=false;
            state.user=null;
            state.token='';
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },

    }
})

export default authSlice
export const { login,logout } = authSlice.actions;