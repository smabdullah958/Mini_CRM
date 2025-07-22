import { createSlice } from "@reduxjs/toolkit";
import { LeadSearchClientThunck } from "../Redux_Thunck/LeadSearchClientThunck";


let SearchClient=createSlice({
    name:"SearchClient",
    initialState:{
        user:[],
        Loading:false
    } ,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(LeadSearchClientThunck.fulfilled,(state,action)=>{
            state.Loading=false,
            state.user=action.payload  // Assuming the payload contains the user data
        })
        .addCase(LeadSearchClientThunck.rejected,(state)=>{
            state.Loading=false
        })
        .addCase(LeadSearchClientThunck.pending,(state)=>{
            state.Loading=true
        })
    }
})

export default SearchClient.reducer;