// imports
// const express = require("express");
import express from "express";
// rest object 
const app = express();
// routes
app.get("/",(req,res) => {
    res.send("<h1> Welcome to my Job Portal</h1>");
});
// lisent
app.listen(8081, () =>{
    console.log("application is ready to start!"); 
    console.log("Node Server Running");

});
