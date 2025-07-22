//useselector is used to access the state from the Redux store
//usedispatch is used to dispatch actions to the Redux store
import { useSelector,useDispatch } from "react-redux";
import {postClient} from "../../Redux_Toolkit/Redux_Thunck/PostClientThunck.js";

//for refreshing after add a new client
import { GetUser } from "../../Redux_Toolkit/Redux_Thunck/GetClientThunck.js";

import { closeForm } from "../../Redux_Toolkit/Slices/PostSlices.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
//for fields validations
const validation = yup.object().shape({
    CompanyName: yup.string().required("Company Name is required"),
    Email: yup.string().email("Invalid email").required("Email is required"),
    Contact: yup.string().required("Contact number is required").length(10, "Contact number must be 10 digits").matches(/^[0-9]+$/, "Contact number must be numbers only"),
})

function PostClient({FormClose}){
    let dispatch=useDispatch();
    //here the AddClient is come from a store file
let {loading,error,success,errorMessage}=useSelector((state)=>state.AddClient);


    let {
        register,
        handleSubmit,
        formState: { errors }
    }=useForm(
        {
            resolver:yupResolver(validation)
        }
    );

    let submit=(formdata)=>{
//this is a postClient is a thunk funcion that is imported from PostClientThunck.js
        dispatch(postClient(formdata));
        console.log("formdata",formdata);

        

    }
    useEffect(()=>{
        
        if(success){
            setTimeout(() => {
            dispatch(closeForm());
     //this is used to close a form 
            FormClose();
            // Refresh the client list after adding a new client
            dispatch(GetUser()); 


            }, 1000);
                   }
    },[success,dispatch])



    return (
    <form className="bg-gray-100 p-10 grid justify-center   sm:grid-cols-2 gap-5">
    {/* //for successfully client is added */}
{success && <p className="text-green-500">Client added successfully!</p>}
{error && <p className="text-red-500">{errorMessage}</p>}
<div>
{errors.CompanyName && <p className="text-red-500">{errors.CompanyName.message}</p>}
   
    <input type="text" className="p-2" placeholder="CompanyName" {...register("CompanyName")}/>
</div>

<div>
        {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}

    <input type="email" className="p-2" placeholder="Email" {...register("Email")}/>
    </div>
    <div>
    {errors.Contact && <p className="text-red-500">{errors.Contact.message}</p>}

    <input type="text" className="p-2" placeholder="Phone NO" {...register("Contact")}/>
    </div>
    <div className="sm:flex flex-col sm:flex-row   items-center sm:w-full w-40 ">
        <label htmlFor="New">New</label>
    <input type="radio" id="New" className="m-2"  value="New" {...register("Leads")}/>

     <label htmlFor="Contact">Contact</label>
    <input type="radio" id="Contact" className="m-2"  value="Contact" {...register("Leads")}/>
         <label htmlFor="Proposal">Proposal</label>
    <input type="radio" id="Proposal" className="m-2"  value="Proposal" {...register("Leads")}/>
         <label htmlFor="Won">Won</label>
    <input type="radio" id="Won" className="m-2"  value="Won" {...register("Leads")}/>
    </div>

<div className="sm:col-span-2 justify-center flex ">
    <button type="submit" className={`bg-blue-500 text-white p-2  w-48 rounded-xl active:bg-blue-400  ${loading?"cursor-not-allowed opacity-40":"cursor-auto"}`}
     onClick={handleSubmit(submit)}>
     {loading?"Loading...":"Submit"}
     </button>
</div>
    </form>    
    )
} 
export default PostClient;