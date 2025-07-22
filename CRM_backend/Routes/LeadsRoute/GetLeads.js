let database=require("../../Database/Userdata"); 
let  GetLead=async(req,res)=>{
try{
    let Result=await database.find()
    res.status(200).json({message:"successfully",Result})
}
catch(error){
    console.log("internal error",error);
    res.status(500).json({message:"internal error"});
}}
module.exports=GetLead