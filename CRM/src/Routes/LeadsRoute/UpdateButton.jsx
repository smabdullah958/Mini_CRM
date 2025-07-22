
import { useState } from "react";
import Update_Lead_Form from "./UpdateForm";

let UpdateButton = ({_id,UserData}) => {
  const [ShowButton, SetShowButton] = useState(false);

  let CLOSE_FORM= ()=>SetShowButton(false)

  return (
    <>
      <div className="flex justify-end">
        <button
          className="border-2 border-black p-1 rounded-xl transition-all duration-1000 bg-blue-100 hover:bg-blue-500 text-black hover:text-white"
          onClick={() => SetShowButton(true)}
        >
          Update
        </button>
      </div>

      {ShowButton && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          {/* Form container */}
          {/* <div className="bg-white  p-10 rounded-xl shadow-lg w-[100vw] max-w-2xl relative">  */}
           <div className="relative w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg"> 
            <button
              onClick={() => SetShowButton(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            
            <Update_Lead_Form CLOSE_FORM={CLOSE_FORM} _id={_id} UserData={UserData} />
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateButton;
