import { useSelector,useDispatch } from "react-redux";
import { GetDataByDateThunck } from "../../Redux_Toolkit/Redux_Thunck/GetByDateThunck";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let GetDataByRoute=()=>{
    let dispatch=useDispatch()
    //the getdatabydateslice is come from a store bro
    let {error,Loading,GetDataByDate}=useSelector((state)=>state.GetDataByDateSlice);

    //  State to store selected date
    let [selectedDate,setselectedDate]=useState(new Date())

    useEffect(()=>{
        if(selectedDate){
            let TaskDate=selectedDate.toISOString().split("T")[0]  // e.g. 2025-07-25
            //now the TaskDatae is pass to a thunck
            dispatch(GetDataByDateThunck(TaskDate))
        }
    },[selectedDate,dispatch])
return (
    <div>
      <h2 className="mb-4 ml-6">Select Date to View Tasks</h2>

<div className="ml-6">
<DatePicker 
  selected={selectedDate}
  onChange={(date) => setselectedDate(date)}
  dateFormat="yyyy-MM-dd"
//inline is use to show the calender directly
  inline
/>
</div>
<div className="bg-green-100 mt-5 p-10 h-52 overflow-y-auto mb-10 rounded-3xl ">
      
      {Loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
      {GetDataByDate.length===0 &&
      <p className="pt-10">
        Not available
      </p>}
        {GetDataByDate.map((task, index) => (
         
          <li key={index}>{task.Task}</li>
         
        ))}
      </ul>
      </div>
    </div>
  );
};

export default GetDataByRoute