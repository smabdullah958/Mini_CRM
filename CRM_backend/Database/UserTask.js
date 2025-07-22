let mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MiniCRM");

let Sch = new mongoose.Schema({
    Task:{
        type:String,
        required:true,
        min:1,
        max:4000

    },
    TaskDate:{
        type:Date,
        required:true
    },
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Client",
        required:true
    }
})
let model=mongoose.model("UserTask",Sch)
module.exports=model;