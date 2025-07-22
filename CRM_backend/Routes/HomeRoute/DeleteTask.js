let database=require("../../Database/UserTask");

let DeleteTask=async(req,res)=>{
    try{
        let {_id}=req.params
    let Delete=await database.findOneAndDelete({_id:_id})
        if(!Delete){
            return res.status(400).json({message:"invalid id in a DeleteTask"})
        }
        console.log(Delete)
        return res.status(200).json({message:"successfully deleted ",Delete})

}
catch(error){
    console.log("Internal error in a DeleteTask",error)
    res.status(500).json({message:"internal error in a DeleteTask",error})
}
}
module.exports=DeleteTask