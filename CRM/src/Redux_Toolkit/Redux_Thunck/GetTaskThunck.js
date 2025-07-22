import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export let GetTaskThunck=createAsyncThunk(
    "GetThunck",
    async({UserID},{rejectWithValue})=>{
        try{
            let response=await axios.get(`http://localhost:7777/ParentRoute/GetTask/${UserID}`)
            //response is a object and here inside it all the data is present which we are get here bro 
            return response.data.display
        }
        catch(error){
            console.log("get taskthunck is not work",error)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)