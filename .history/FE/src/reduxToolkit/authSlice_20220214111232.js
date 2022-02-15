import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        login:{
            currentUser:null,
            isFetching:false,
            error:false,
        },
        register:{
            isFetching:false,
            error:false,
            success:false,
        }
    },
    reducers:{
        loginInit:(state)=>{
            state.login.isFetching=false;
            state.login.currentUser=null;
        },
        loginStart:(state)=>{
            state.login.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.login.isFetching=false;
            state.login.currentUser=action.payload;
        },
        loginFalse:(state)=>{
            state.login.isFetching=false;
            state.login.error=true;
        },
       registerStart:(state)=>{
            state.register.isFetching=true
        },
       registerSuccess:(state)=>{
            state.register.isFetching=false;
            state.register.success=true;
        },
       registerFalse:(state)=>{
            state.register.isFetching=false;
            state.register.error=true;
            state.register.success=false;
        }
    }
})

export const {loginStart,loginSuccess,loginFalse,registerFalse,registerSuccess,registerStart,loginInit} = authSlice.actions
export default authSlice.reducer