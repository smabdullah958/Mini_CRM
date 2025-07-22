import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let UpdateFormThunck=createAsyncThunk(
    "updatethunck",
    async({_id,formdata},{rejectWithValue})=>{
        try{
            let response = await axios.put(`http://localhost:7777/ParentRoute/UpdateForm/${_id}`,formdata);
            return response.data;
        }
        catch(error){
            console.log("updateform thunck is not work",error);
            return rejectWithValue(error?.response?.data?.message)
        }
    }

)