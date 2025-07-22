import UpdateButton from "./UpdateButton";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../Redux_Toolkit/Redux_Thunck/GetClientThunck";
import { useEffect } from "react";
import Spinner from "../../Spinner";
import LeadSearche from "./LeadSearches";

function LeadsRoute() {
  const dispatch = useDispatch();
  //DisplayUser is come from a store 
  const {  Loading } = useSelector((state) => state.DisplayUser);
  //searchClient is come from a store
  let {user}=useSelector((state)=>state.SearchClient)
  useEffect(() => {
    dispatch(GetUser());
  }, [dispatch]);

  //for searching if not found than empty
  const clientsToDisplay = user?.length > 0 ? user :[];
const filterByStage = (stage) =>
  clientsToDisplay?.filter((client) => client.Leads === stage);



  const stages = ["New", "Contact", "Proposal", "Won"];

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen w-full">
      {Loading && <Spinner />}
<div>
  <LeadSearche/>
</div>
<div className="flex  justify-between ">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8 mr-5">
        Leads 
      </h1>
<h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
       
        {user.length}
      </h1>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stages.map((stage) => (
          <div
            key={stage}
            className="bg-white rounded-2xl p-4 shadow border border-blue-200 overflow-auto h-[100vh]"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">
              {stage}
            </h2>

            {filterByStage(stage).length === 0 ? (
              <p className="text-gray-500 text-center">No clients</p>
            ) : (
              filterByStage(stage).map((client, index) => (
                <div
                  key={index}
                  className="mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <p className="text-gray-800 font-semibold break-words">
                    {client.CompanyName}
                  </p>
                  <p className="text-gray-600 text-sm break-words">
                    {client.Email}
                  </p>
                  <UpdateButton _id={client._id} UserData={client}/>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadsRoute;
