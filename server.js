// imports
const express = require("express");
// rest object 
const app = express();
// routes
app.get("/",(req,res) => {
    res.send("<h1> Welcome to my 1st Job Portal</h1>");
});
// lisent
app.listen(8081, () =>{
    console.log("Node Server Running");
});
