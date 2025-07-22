let {body}=require("express-validator");

let validation=[
    body("CompanyName").notEmpty().withMessage("Name is required"),
    body("Email").isEmail().notEmpty().withMessage("Valid email is required"),
    body("Contact").notEmpty().withMessage("Phone number is required"),
    body("Leads").default("New").isIn(["New", "Contacted", "Proposal", "Won"]).withMessage("Lead status must be one of New, Contacted, Proposal, or Won")
]
module.exports=validation;