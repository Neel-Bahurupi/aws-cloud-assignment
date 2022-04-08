const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hi");
})

app.get("/home",(req,res)=>{
    res.send({title:"amazon ec2"});
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})