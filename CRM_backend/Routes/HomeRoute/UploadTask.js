let database=require("../../Database/UserTask");

let UpLoadTask=async(req,res)=>{
try{
    let {_id}=req.params
    let {Task,TaskDate}=req.body;
    if(!Task||!TaskDate||!_id){
        return res.status(400).json({message:"All fields are mandatory"})
    }
    let result=new database({
        Task,   
        TaskDate,
        UserID:_id
    });
    let data=await result.save()
    console.log(data)
return res.status(200).json({message:"succefully message is assing",data})
}
catch(error){
    console.log("internal error is occur");
    res.status(500).json({message:"internal error",error})
}
}
module.exports=UpLoadTask