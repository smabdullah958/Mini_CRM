import { createSlice } from "@reduxjs/toolkit";
import { GetDataByDateThunck } from "../Redux_Thunck/GetByDateThunck";

let GetByDateSlice=createSlice({
    name:"data",
    initialState:{
        GetDataByDate:[],
        Loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(GetDataByDateThunck.fulfilled,(state,action)=>{
            state.GetDataByDate=action.payload
            state.Loading=false
            state.error=null
        })
        .addCase(GetDataByDateThunck.pending,(state)=>{
            state.Loading=true,
            state.error=null
        })
        .addCase(GetDataByDateThunck.rejected,(state,action)=>{
            state.Loading=false,
            state.error=action.payload
        })
    } 
})

export default GetByDateSlice.reducer;