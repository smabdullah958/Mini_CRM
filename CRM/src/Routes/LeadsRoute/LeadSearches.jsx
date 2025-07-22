import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { LeadSearchClientThunck } from "../../Redux_Toolkit/Redux_Thunck/LeadSearchClientThunck";

function LeadSearche() {
  const [Display, SetDisplay] = useState({
    SearchByAnyThing: "",
    SearchByLeads: "",
  });
  //SearchClient is come froma store 
  let {Loading}=useSelector((state)=>state.SearchClient)
let dispatch=useDispatch()
  let SubmitSearching=(e)=>{
    SetDisplay((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(()=>{
dispatch(LeadSearchClientThunck({
    SearchByAnyThing:Display.SearchByAnyThing,
    SearchByLeads:Display.SearchByLeads
}))
  },[dispatch,Display])

  return (
    <div className="w-full px-4 pb-3">
      <form className="flex flex-col sm:flex-row gap-4  max-w-4xl mx-auto">
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="🔍 Search by company, email, or contact"
          className="w-full sm:w-[50%] px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          value={Display.SearchByAnyThing}
          onChange={SubmitSearching}
        name="SearchByAnyThing"

        />

        {/* Leads Dropdown */}
        <select
        name="SearchByLeads"
        value={Display.SearchByLeads}
          className="w-full sm:w-[35%] px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          onChange={SubmitSearching}>
          <option value="">🔽 Filter by Lead</option>
          <option value="New">New</option>
          <option value="Contact">Contact</option>
          <option value="Proposal">Proposal</option>
          <option value="Won">Won</option>
        </select>
      </form>
    </div>
  );
}

export default LeadSearche;
 