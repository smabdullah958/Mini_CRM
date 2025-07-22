import { createSlice } from "@reduxjs/toolkit";
import { UpdateFormThunck } from "../Redux_Thunck/UpdateFormThunck";

let UpdateFormSlice=createSlice({
    name:"update",
    initialState:{
        loading:false,
        error:false,
        errorMessage:"",
        success:false
        },
    reducers:{
        reset:(state)=>{
            state.loading=false
            state.error=false
            state.errorMessage=""
            state.success=false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(UpdateFormThunck.fulfilled,(state)=>{
            state.loading=false
            state.error=false
            state.success=true
        })
        .addCase(UpdateFormThunck.pending,(state)=>{
            state.loading=true
            state.error=false
            state.success=false
        })
        .addCase(UpdateFormThunck.rejected,(state)=>{
            state.loading=false
            state.error=true
            state.errorMessage="email is already exist",
            state.success=false
        })
    }

})
export const {reset}=UpdateFormSlice.actions

export default UpdateFormSlice.reducer;