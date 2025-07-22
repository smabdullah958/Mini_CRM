import {useState,useEffect } from "react"
import { useDispatch } from "react-redux";
import {HomeSearchThunck} from "../../Redux_Toolkit/Redux_Thunck/HomeSearchThunck"

function HomeRouteSearch(){
    let dispatch=useDispatch();
let [SearchByAnyThing,SetSearchByAnyThing]=useState("")
// const [debouncedSearch, setDebouncedSearch] = useState("");

let handlechange=(e)=>{
    SetSearchByAnyThing(e.target.value);
    if(e.target.value.trim()===""){
        dispatch(HomeSearchThunck({SearchByAnyThing:""}))
    }
}    

let handledown=(e)=>{
    if(e.key==="Enter"){
        dispatch(HomeSearchThunck({SearchByAnyThing}))
    }
};

   useEffect(()=>{
    dispatch(HomeSearchThunck({
        SearchByAnyThing:""
    }))
    },[])

return(
        <div className="flex ">

            <input type="text" placeholder="Search here"
            onChange={handlechange} 
            className=" w-[33vw]  p-2  border-1 border-gray-300 rounded-xl focus:outline-none focus:ring-blue-400  transition-all duration-1000 bg-blue-100 hover:bg-blue-300 text-black "
            onKeyDown={handledown}
     />      


        </div>
    )
}
export default HomeRouteSearch