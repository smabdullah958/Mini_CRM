require('dotenv').config();
console.log("Testing:", process.env.PORT);
const PortNo = process.env.PORT;
console.log(PortNo)

let express=require("express");
let App=express();
let cors=require("cors");
App.use(cors())
App.use(express.json());
const Controler = require("./Routes/Controler.js");
App.use("/ParentRoute",Controler);
// console.log("Server is running on port 7777");

App.listen(PortNo)
