import AddClientButton from "./AddClientButton"
import { useDispatch, useSelector } from "react-redux";
import { HomeSearchThunck } from "../../Redux_Toolkit/Redux_Thunck/HomeSearchThunck";
import { useEffect } from "react";
import Spinner from "../../Spinner";
import HomeRouteSearch from "./HomeRouteSearch";
import { useNavigate } from "react-router";


function HomeRoute(){
  const dispatch = useDispatch();

  let navigate=useNavigate()

  // useSelector is used to access state from Redux store
  //DisplayUser is come from a store file bro
  const {  Loading } = useSelector((state) => state.DisplayUser);
  let {data}=useSelector((state)=>state.HomeSearch);
  useEffect(() => {
    // Dispatching API to get all clients
    dispatch(HomeSearchThunck());
  }, [dispatch]);

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen w-full ">
      
      {/* Loading spinner while data is being fetched */}
      {Loading && <Spinner />}
      
<div className="flex gap-2 sm:gap-8">
<AddClientButton /> 
<HomeRouteSearch/>
</div>
         <div className="flex justify-around">
      <h1 className="text-2xl sm:text-3xl font-bold  mb-8 text-blue-800">
        All Clients
      </h1>
<h1 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-800">
{/* if the leads is won than count other wise no count */}
  {data.filter((client)=>client.Leads==="Won").length}
  </h1>

      </div>

      {/* Grid layout for displaying all client cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {/* Mapping through the client data */}
        
        {!Loading && (
  data?.filter((client) => client.Leads === "Won").length === 0 ? (
    <p className="text-center text-gray-500 col-span-full">No clients found.</p>
  ) : null
)}

         

        {
            data?.filter((client)=>client.Leads==="Won")
            .map((client, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:w-32 md:w-36 lg:w-72 break-words">
              {client.CompanyName}({client.Leads})
            </h2>
            
            <p className="text-gray-600 mb-1 sm:w-32 md:w-36 lg:w-52 break-words cursor-pointer" 
            onClick={()=>navigate(`/IDRoute/${client._id}`)}>
              <span className="font-semibold text-blue-400">Email:</span> <span className="  text-blue-400"> {client.Email}</span>
            </p>
            
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Contact:</span> {client.Contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

}
export default HomeRoute;