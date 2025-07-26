import { createSlice } from "@reduxjs/toolkit";
import { postClient } from "../Redux_Thunck/PostClientThunck";

let PostSlice=createSlice({
name:"Slices",
    initialState:{
        loading:false,
        error:false,
        success:false,
        errorMessage:"",
    },
     reducers:{

        closeForm:(state)=>{
            state.loading=false;
            state.error=false;
            state.success=false;
              state.errorMessage="";
        },
        reset:(state)=>{
            state.loading=false;
            state.error=false;
            state.success=false;
            state.errorMessage="";
        }

    },
    extraReducers:(builder)=>{
        //for pending
        builder
        .addCase(postClient.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.success = false;
            state.errorMessage = "";
        })
        //for error
        .addCase(postClient.rejected,(state) => {
            state.error=true;
            state.errorMessage="email is exist ";
            state.loading=false;
            state.success=false;
    })
//for success
        .addCase(postClient.fulfilled, (state) => {
              state.success = true;
              state.loading=false;
        })
    }
})
export const { closeForm,reset } = PostSlice.actions;
export default PostSlice.reducer;