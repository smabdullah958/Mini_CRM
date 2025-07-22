import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let GetUser = createAsyncThunk(
    "DisplayUser",
    async()=>{
        try{
            let response=await axios.get("http://localhost:7777/ParentRoute/GetLead");
            //.Result is come from a backend
            console.log("data is refetch") 
            return response.data.Result;
        }
        catch(error){
            console.error("error in a get API",error);
            return error.response?.data?.message;
        }
    }
)