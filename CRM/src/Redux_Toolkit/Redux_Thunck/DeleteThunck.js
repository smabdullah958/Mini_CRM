import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let DeleteThunck=createAsyncThunk(
    "Delete", async({_id},{rejectWithValue})=>{
        try{
            let response=await axios.delete(`http://localhost:7777/ParentRoute/DeleteTask/${_id}`)
            console.log(response)
            return response.data
        }
        catch(error){
              rejectWithValue(error.response?.data?.message)
        }

    }
)