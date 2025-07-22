let database=require("../../Database/Userdata");

let HomeSearch=async(req,res)=>{
    try{
        let {SearchByAnyThing}=req.query;
        let SearchClient={};
        if(SearchByAnyThing){
            SearchClient.$or=[
                {CompanyName:{$regex:SearchByAnyThing}},
                {Email:{$regex:SearchByAnyThing}},
                {Contact:{$regex:SearchByAnyThing}}
            ]
        }
        let findClient=await database.find(SearchClient)
        console.log(findClient,req.query);
        res.status(200).json({message:"successfully",findClient})
    }
    catch(error){
        console.log('error',error);
        res.status(500).json({message:"internal error"})
    }
}
module.exports=HomeSearch;