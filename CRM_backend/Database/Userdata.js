
let mongoose=require("mongoose");
require('dotenv').config();
console.log(process.env.Connetion)
mongoose.connect(`${process.env.Connetion}/MiniCRM`)

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