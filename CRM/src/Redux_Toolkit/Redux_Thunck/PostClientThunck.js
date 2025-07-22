import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postClient = createAsyncThunk(
    "PostClient",async(formdata,{rejectWithValue})=>{
        try{
            let response=await axios.post("http://localhost:7777/ParentRoute/PostLead",formdata);
            return response.data;
        }
        catch(error){
             console.error("error in a post API",error);
             return rejectWithValue(error.response?.data?.message);
        }
    }
)