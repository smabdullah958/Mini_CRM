let mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/MiniCRM")

let Schema=new mongoose.Schema({
    CompanyName:{
        type:String,
        required:true,
    
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Contact:{
        type:String,
        required:true
    },
    Leads:{
        type:String,
        enum:["New","Contact","Proposal","Won"],
        default:"New"
    }
})

console.log("Schema")

let mod=mongoose.model("Client",Schema);
module.exports=mod;