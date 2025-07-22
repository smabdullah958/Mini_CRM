import { createSlice } from "@reduxjs/toolkit";
import {GetTaskThunck} from "../Redux_Thunck/GetTaskThunck";

let GetTaskSlice=createSlice({
    name:"getslice",
    initialState:{
        getTask:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(GetTaskThunck.fulfilled,(state,action)=>{
            console.log("payload bro",action.payload)    
            state.getTask=action.payload
        })
        .addCase(GetTaskThunck.pending,(state)=>{
            state.getTask=[]
        })
        .addCase(GetTaskThunck.rejected,(state)=>{
            state.getTask=[]
        })
    }
})


export default GetTaskSlice.reducer;