let database=require("../../Database/UserTask");
let GetTask=async(req,res)=>{
    try{
        let {UserID}=req.params
        if(!UserID){
            return res.status(400).json({message:"id is not found bro"})
        }
    let display=await database.find({UserID});
    if(!display){
        return res.json({message:"no task is found"},display)
    }
    console.log("display",display)
    res.status(200).json({message:"get task is successfully ",display}) 
}
catch(error){
    console.log("internal error bro in a getTask ",error)
    res.status(500).json({message:"internal error bro in a getTask",error})
}
}
module.exports=GetTask;