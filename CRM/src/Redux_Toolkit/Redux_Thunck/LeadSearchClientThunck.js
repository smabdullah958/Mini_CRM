import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export let LeadSearchClientThunck=createAsyncThunk(
    "SearchThunck",
    async({SearchByAnyThing,SearchByLeads})=>{
        try{
        let response=await axios.get("http://localhost:7777/ParentRoute/SearchClient",
            {
                params:{SearchByAnyThing,SearchByLeads}
            })
            return response.data.findClient
    }
catch(error){
    console.log("internal error")
}
}
)