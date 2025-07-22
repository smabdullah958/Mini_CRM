
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UploadTaskThunck } from "../../Redux_Toolkit/Redux_Thunck/UpLoadTaskThunck";
import { reset } from "../../Redux_Toolkit/Slices/UploadTaskSlice";
import Spinner from "../../Spinner";
import { GetTaskThunck } from "../../Redux_Toolkit/Redux_Thunck/GetTaskThunck";


const NewTaskForm = ({ _id,UserID }) => {
  const { Loading, error, errorMessage, success } = useSelector(
    (state) => state.UpLoadTaskSlice
  );
  const dispatch = useDispatch();

  const [Form, SetForm] = useState({
    Task: "",
    TaskDate: "",
  });

  const [CustomError, SetCustomError] = useState("");
  const [successMessage,SetSuccessMessage]=useState("")

  const handleFields = (e) => {
    SetCustomError("");
    SetForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Form.Task || !Form.TaskDate) {
      return SetCustomError("❗ All fields are mandatory.");
    }

    if (Form.Task.length > 4000) {
      return SetCustomError("❗ Task description must not exceed 4000 characters.");
    }

    dispatch(UploadTaskThunck({ Form, _id }));
  };

  useEffect(() => {
    if (success) {
      SetSuccessMessage("task is upload")
      setTimeout(() => {
        SetForm({
          Task: "",
          TaskDate: "",
        });
        dispatch(reset());
        
      }, 1000);
    }
  }, [success, dispatch]);

  useEffect(()=>{
    if(success){
    dispatch(GetTaskThunck({UserID}))
    }
  },[success,dispatch])

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">📝 Add a New Task</h2>

      {CustomError && (
        <div className="mb-4 text-red-600 font-medium text-center">
          {CustomError}
        </div>
      )}

      {error && (
        <div className="mb-4 text-red-600 font-medium text-center">
          {errorMessage}
        </div>
      )}
      {success && <p className="text-green-400"> {successMessage}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row gap-6 justify-between items-start"
      >
        <textarea
          className="w-full lg:w-[60%] h-48 p-4 text-gray-800 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all resize-none"
          placeholder="✍️ Write your task here..."
          rows="10"
          name="Task"
          onChange={handleFields}
          value={Form.Task}
        />

        <div className="flex flex-col gap-4 w-full lg:w-[35%]">
          <input
            className="w-full h-16 px-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            type="date"
            name="TaskDate"
            onChange={handleFields}
            value={Form.TaskDate}
          />

          <button
            type="submit"
            className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-md transition duration-300 ease-in-out flex items-center justify-center"
          >
            {Loading ? <Spinner /> : "✅ Submit Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskForm;
