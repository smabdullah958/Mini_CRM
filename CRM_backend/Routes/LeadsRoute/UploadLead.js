let {validationResult} = require("express-validator");

let database=require("../../Database/Userdata");

let UploadLead=async(req,res)=>{
    try{
        let {CompanyName,Contact,Email,Leads}=req.body;
        if(!CompanyName || !Contact || !Email ){
            return res.status(400).json({message:"all fields must be filled"});
    }

    //for validation
    let errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:"error in a validation",errors:errors.array()});
    }

    let newLead=new database({
        CompanyName,
        Contact,
        Email,
        Leads
    })

    //check if email already exists
    let existEmail=await database.findOne({Email});
    if(existEmail){
        return res.status(400).json({message:"emails is exists",success:false})
    }

    let result=await newLead.save();
    res.status(200).json({message:"lead is uploaded",result,success:true});
    console.log("lead is uploaded",result);
    }
catch(error){
    console.log("internal error",error);
    res.status(500).json({message:"internal error"});
}
}
module.exports=UploadLead;