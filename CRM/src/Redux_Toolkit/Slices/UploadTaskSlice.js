import { createSlice } from "@reduxjs/toolkit";
import { UploadTaskThunck } from "../Redux_Thunck/UpLoadTaskThunck";

let UploadTaskSlice=createSlice({
    name:"uploadtask",
    initialState:{
        Loading:false,
        error:false,
        errorMessage:"",
        success:false
    },
    reducers:{
        reset:(state)=>{
            state.Loading=false
            state.error=false
            state.errorMessage=""
            state.success=false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(UploadTaskThunck.fulfilled,(state)=>{
            state.Loading=false
            state.error=false
            state.errorMessage=""
            state.success=true
        })
        .addCase(UploadTaskThunck.pending,(state)=>{
            state.Loading=true
            state.error=false
            state.errorMessage=""
            state.success=false
        })
        .addCase(UploadTaskThunck.rejected,(state)=>{
            state.Loading=false
            state.error=true
            state.errorMessage="All fields are mandatory"
            state.success=false
        })
    }
})

export let {reset}=UploadTaskSlice.actions

export default UploadTaskSlice.reducer