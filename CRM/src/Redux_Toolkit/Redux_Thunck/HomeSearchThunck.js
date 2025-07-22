import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let  HomeSearchThunck=createAsyncThunk(
    "HomeSearchThunck",
    async({SearchByAnyThing})=>{  
        try{
        let response=await axios.get("http://localhost:7777/ParentRoute/SearchHome",
            {
                params:{SearchByAnyThing}
            }
        )
        return response.data.findClient;
 
           }   
        catch(error){
            console.log("error",error)
        }
        }
)