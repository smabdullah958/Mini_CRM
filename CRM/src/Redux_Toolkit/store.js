import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./Slices/PostSlices";
import GetSlices  from "./Slices/GetSlices";
import LeadSearchClientSlice from "./Slices/LeadSearchSlice"
import HomeSearchSlice from "./Slices/HomeSearchSlices"
import UpdateFormSlice from "./Slices/UpdateFormSlice";
import  UpLoadTaskSlice  from "./Slices/UploadTaskSlice";
import GetTaskSlice from "./Slices/GetTaskSlice"
export let store=configureStore({
    reducer:{
        AddClient:PostSlice,
        DisplayUser:GetSlices,
        SearchClient:LeadSearchClientSlice,
        HomeSearch:HomeSearchSlice,
        FormUpdate:UpdateFormSlice,
        UpLoadTaskSlice,
        GetTaskSlice:GetTaskSlice
    }
})