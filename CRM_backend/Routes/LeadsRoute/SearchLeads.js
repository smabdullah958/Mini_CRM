//regex is used for a regualar expresson for a pattern whose stirng is matchin with a database

let database=require("../../Database/Userdata");
async function SearchLeads(req,res){
try{
//mostly for searching and sorting we are mostly use req.query
    let {SearchByAnyThing,SearchByLeads}=req.query;
    let SearchClient={};
    //this is not fixed so that is why we use a regex like we search ab but in real it is a abcd  so that is why we use regex    
     if(SearchByAnyThing){
        SearchClient.$or=[
            {CompanyName:{$regex:SearchByAnyThing}},
        {Email:{$regex:SearchByAnyThing}}
        ]
    }
//this is a fixed  value(like won , new etc ) so that is why we dont use the regex 
    if(SearchByLeads){
        SearchClient.Leads=SearchByLeads
    }   
let findClient=await database.find(SearchClient);
console.log(findClient,req.query)
res.status(200).json({message:"successfuly search",findClient})
}
catch(error){
    console.log("eror is occur")
    return res.status(500).json({message:"internal error"}) 
}
}
module.exports=SearchLeads;