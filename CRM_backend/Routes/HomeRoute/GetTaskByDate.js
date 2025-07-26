let Database=require("../../Database/UserTask")
async function GetTaskByDate(req,res){
    try{
        let {TaskDate}=req.params;
        if(!TaskDate){
            return res.status(400).json({message:"plz enter the date"})
        }
        let findData=await Database.find({TaskDate})
        if(!findData){
            return res.status(200).json({message:"today has not any task"})
        }
        return res.status(200).json({message:"successfully",findData})
    }
    catch(error){
        console.log("internal eror in a gettaskbydate")
        return res.status(500).json({message:"internal eror in a gettaskbydate",error})
    }
}
module.exports=GetTaskByDate