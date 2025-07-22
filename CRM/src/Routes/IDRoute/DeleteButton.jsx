import { useDispatch } from "react-redux"
import { GetTaskThunck } from "../../Redux_Toolkit/Redux_Thunck/GetTaskThunck"
import { DeleteThunck } from "../../Redux_Toolkit/Redux_Thunck/DeleteThunck"

//UserID is a id o f a user
//_id is a id of a task bro 
function DeleteButton({_id,UserID}){
    let dispatch=useDispatch()
    let handleButton=()=>{
             dispatch(DeleteThunck({_id}))
       setTimeout(() => {
           
         dispatch(GetTaskThunck({UserID}))
       }, 1000);
    }
    return(
        <div>
            <button  type="button"
            className="w-full my-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-md transition duration-300 ease-in-out flex items-center justify-center" 
            onClick={handleButton}>
                Delete
            </button>
        </div>
    )
}
export default DeleteButton