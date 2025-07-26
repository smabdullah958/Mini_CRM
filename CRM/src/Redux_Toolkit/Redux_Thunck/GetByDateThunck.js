import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export let GetDataByDateThunck=createAsyncThunk(
    "remainder",
    async(TaskDate,{rejectWithValue})=>{
        try{
        let response=await axios(`http://localhost:7777/ParentRoute/GetTaskByDate/${TaskDate}`)
        return response.data.findData||[]
    }

catch(error){
    return rejectWithValue(error.response?.data?.message||"Failed to fetch ")
}
    }
)
