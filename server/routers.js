'use strict'

const services=require("./services")
module.exports = (app)=> {
    let router = require("express").Router();
    
    router.post("/signup",services.signup);
    router.post("/login", services.login);
    router.get("/getdiscussions", services.getdiscussion);
    router.post("/creatediscussions",services.creatediscussion );
    router.get("/getprofile", (req,res,next)=>{ });
    router.post("/createprofile", (req,res,next)=>{ });

    app.use("/api", router);
}

