let database=require("../../Database/Userdata");

let UpdateForm=async(req,res)=>{
try{
    let {_id}=req.params
    console.log(_id)
    let {CompanyName,Contact,Leads,Email}=req.body
    if(!CompanyName||!Contact||!Leads||!Email){
        return res.status(400).json({message:"all fields must be fields",success:false})
    }
    let result=await database.findOneAndUpdate({_id},{CompanyName,Contact,Leads,Email},{
        new:true
    });
    console.log(result,_id)
    res.status(200).json({message:"successfully uploaded",result,success:true})
}
catch(error){
    console.log("error in a updateform",error)
    res.status(500).json({message:"internal error",error})
}   
}
module.exports=UpdateForm