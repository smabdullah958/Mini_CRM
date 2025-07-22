import { createSlice } from "@reduxjs/toolkit";
//thsi is a thunck
import { GetUser } from "../Redux_Thunck/GetClientThunck";

let GetSlices = createSlice({
name: "GetSlice",
    initialState: {
        Loading:false,
        Error:false,
        Success:false,
             data:[]
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(GetUser.pending,(state)=>{
            state.Loading = true;
            state.Error = false;
            state.Success = false;
        })
        .addCase(GetUser.rejected,(state)=>{
            state.Loading = false;
            state.Error = true;
            state.Success = false;
        })
        .addCase(GetUser.fulfilled,(state,action)=>{
            state.Loading = false;
            state.Error = false;
            state.Success = true;
            state.data = action.payload; // Assuming the payload contains the user data
        })

    }
})

export default GetSlices.reducer;