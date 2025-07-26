let express = require("express");
let ParentRoute=express.Router();
let UploadLead = require("./LeadsRoute/UploadLead.js");
let GetLead = require("./LeadsRoute/GetLeads.js");
let LeadsMiddleware = require("./LeadsRoute/middleware/LeadsMiddleware.js");
let SearchLeads=require("./LeadsRoute/SearchLeads.js");
let HomeSearch=require("./HomeRoute/HomeSearch.js")
let UpdateForm=require("./LeadsRoute/UpdateForm.js");
//it is used to upload a task
let UpLoadTask=require("./HomeRoute/UploadTask.js")
//to display the data task ofa  user
let GetTask=require("./HomeRoute/GetTask.js");
//to delete task
let DeleteTask=require("./HomeRoute/DeleteTask.js");
//get task by a date bro
let GetTaskByDate=require("./HomeRoute/GetTaskByDate.js")

ParentRoute.post("/PostLead",LeadsMiddleware,UploadLead);
ParentRoute.get("/GetLead",GetLead);
ParentRoute.get(`/SearchClient`,SearchLeads)
ParentRoute.get("/SearchHome",HomeSearch)
ParentRoute.put(`/UpdateForm/:_id`,UpdateForm)
ParentRoute.post(`/UploadTask/:_id`,UpLoadTask)
ParentRoute.get(`/GetTask/:UserID`,GetTask)
ParentRoute.delete(`/DeleteTask/:_id`,DeleteTask)
ParentRoute.get(`/GetTaskByDate/:TaskDate`,GetTaskByDate)

module.exports = ParentRoute;