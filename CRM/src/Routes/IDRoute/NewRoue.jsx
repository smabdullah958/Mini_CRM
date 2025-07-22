import { useDispatch,useSelector } from "react-redux"
import { GetUser } from "../../Redux_Toolkit/Redux_Thunck/GetClientThunck"
import { useEffect } from "react";
import Spinner from "../../Spinner";
import { useParams } from "react-router";
import NewTaskForm from "./NewTaskForm.jsx";
import GetTaskRoute from "./GetTask.jsx";

let IDRoute=()=>{
let dispatch=useDispatch();
//DisplayUser is come from a store
let {Loading,data}=useSelector((state)=>state.DisplayUser)
let {_id}=useParams() //get id from a url 

useEffect(()=>{
    dispatch(GetUser())
},[])

let user=data.find((client)=>client._id===_id)

return(
    <div>
    <div className="p-4">
   {Loading && <Spinner/>}

      {!Loading && user ? (
        <div className=" w-[80vw]  p-6 mx-auto grid  grid-cols-1 sm:grid-cols-2">
          <h2 className="text-2xl font-bold text-blue-800 mb-4  sm:col-span-2 sm:text-center  ">Client Details</h2>
          <div className="pb-2">
          <strong>Company Name:</strong> {user.CompanyName}
          </div>
          <div className="pb-2">
          <strong>Email:</strong> <span className="inline-block align-top  w-72   truncate " > {user.Email}</span>
          </div>
          <div className="pb-2">
          <strong>Contact:</strong> {user.Contact}
          </div>
          <div className="pb-2">
          <strong>Leads:</strong> {user.Leads}
        </div>      
        </div>
      ) : (
        !Loading && <p className="text-center text-gray-500">Client not found</p>
      )}
      <NewTaskForm _id={_id} UserID={_id} />
      <GetTaskRoute UserID={_id} />
        </div>
    </div>
)
}
export default IDRoute