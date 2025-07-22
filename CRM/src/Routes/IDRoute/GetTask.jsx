
import { useDispatch, useSelector } from "react-redux";
import { GetTaskThunck } from "../../Redux_Toolkit/Redux_Thunck/GetTaskThunck";
import { useEffect } from "react";
import DeleteButton from "./DeleteButton";


const GetTaskRoute = ({ UserID }) => {
    //here the GetTaskSlice is come froma  store brosss
  const { getTask } = useSelector((state) => state.GetTaskSlice);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(GetTaskThunck({ UserID }));
  }, [dispatch, UserID]);

  return (
    <div className="p-6 rounded-3xl bg-gray-100 min-h-screen mt-5">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        📝 Your Task List
      </h1>

      {getTask.length===0?(
        <p className="text-center text-red-500 text-lg mt-10">
    ❌ No task yet.
  </p>
      ):(

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
        {getTask.map((data) => (
          <div
            key={data._id}
            className="bg-white h-96 w-[65vw]  md:w-64 p-5 m-5 rounded-3xl shadow-md border border-gray-200 
            hover:shadow-xl transition duration-300">
            <p className="text-gray-600">
              📅{" "}
              {new Date(data.TaskDate).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 overflow-y-auto h-60 mt-5  ">
              📌 {data.Task}
            </h2>
            <DeleteButton _id={data._id} UserID={UserID}  />
          </div>
        ))}  
          </div>
        )}
      </div>
    
  );
};

export default GetTaskRoute;
