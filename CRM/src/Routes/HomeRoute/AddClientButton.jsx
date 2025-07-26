import PostClient from "./PostClient";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { closeForm } from "../../Redux_Toolkit/Slices/PostSlices.js";

function AddClientButton(){
  let dispatch = useDispatch();

    let [show, setShow] = useState(false);

    // through this we can light the background 
    const closeModal = () => setShow(false);

    let close=()=>{
      dispatch(closeForm());
      closeModal();
    }
    return(
        <div>
        <button className="size-10 border-2 border-black p-1 rounded-full transition-all duration-1000 bg-blue-100 hover:bg-blue-500 text-black hover:text-white" onClick={()=>setShow(!show)}>
          <img src="src\add.png" className=" sm:size-7"/>
        </button>
   
   {/* through this we can light the background */}
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          {/* Form */}
          <div className="relative w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl font-bold"
            >
            {/* for closing it show x(cross ) sign */}
              &times;
            </button>

            <PostClient FormClose={closeModal} />
          </div>
        </div>
      )}
   
      </div>

    )
}
export default AddClientButton;   