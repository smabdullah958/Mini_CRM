import { createSlice } from "@reduxjs/toolkit";
import { HomeSearchThunck } from "../Redux_Thunck/HomeSearchThunck";

let HomeSearchSlice=createSlice({
    name:"HomesearchSlice",
    initialState:{
        data:[],
        Loading:false,
        error:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(HomeSearchThunck.pending,(state)=>{
            state.data=[]
            state.error=false
            state.Loading=true
        })
        .addCase(HomeSearchThunck.rejected,(state)=>{
            state.error=true
            state.Loading=false
            state.data=[]
        })
       .addCase(HomeSearchThunck.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})  

export default  HomeSearchSlice.reducer;