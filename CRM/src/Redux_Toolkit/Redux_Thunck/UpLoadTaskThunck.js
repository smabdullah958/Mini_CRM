import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export let UploadTaskThunck=createAsyncThunk(
    "uploadtask",
    async({Form,_id},{rejectWithValue})=>{
        try{
        let response=axios.post(`http://localhost:7777/ParentRoute/UploadTask/${_id}`,Form)
        return response.data 
    }
    catch(error){
        console.log("error ina uploadtask thunck",error)
        return rejectWithValue(error.response?.data?.message);
    }
}
)