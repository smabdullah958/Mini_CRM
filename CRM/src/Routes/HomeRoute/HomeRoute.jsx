

  import AddClientButton from "./AddClientButton";
  import { useDispatch, useSelector } from "react-redux";
  import { HomeSearchThunck } from "../../Redux_Toolkit/Redux_Thunck/HomeSearchThunck";
  import { useEffect } from "react";
  import Spinner from "../../Spinner";
  import HomeRouteSearch from "./HomeRouteSearch";
  import { useNavigate } from "react-router";
  //show remainder on a home page without button bro
  import GetDataByRoute from "./GetDataByRoute";
//shwo remiander through button
  import GetDataByRouteButton from "./GetDataByRouteButton"

  function HomeRoute() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { Loading } = useSelector((state) => state.DisplayUser);
    const { data } = useSelector((state) => state.HomeSearch);

    useEffect(() => {
      dispatch(HomeSearchThunck());
    }, [dispatch]);

    const wonClients = data?.filter((client) => client.Leads === "Won");

    return (
      <div className="p-4 sm:p-8 bg-gray-50 min-h-screen w-full">
        {Loading && <Spinner />}

        <div className="flex  sm:flex-row sm:items-center sm:justify-normal gap-1 sm:gap-5   mb-6">
          <AddClientButton />
          <HomeRouteSearch />
          <GetDataByRouteButton/>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">
            All Clients   
          </h1>
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">
            {wonClients.length}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Client Cards */}
          <div className="flex-1 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {wonClients.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">
                No clients found.
              </p>
            ) : (
              wonClients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border transition duration-300"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 break-words">
                    {client.CompanyName} ({client.Leads})
                  </h2>
                  <p
                    className="text-gray-600 mb-1 break-words cursor-pointer"
                    onClick={() => navigate(`/IDRoute/${client._id}`)}
                  >
                    <span className="font-semibold text-blue-500">Email:</span>{" "}
                    <span className="text-blue-400">{client.Email}</span>
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Contact:</span>{" "}
                    {client.Contact}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Right: Calendar & Task Display */}
          <div className="hidden lg:block   md:w-[200px] xl:w-[350px] mt-8 lg:mt-0">
            <div className="bg-white p-4 rounded-2xl shadow-md border">
              <GetDataByRoute />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default HomeRoute;
