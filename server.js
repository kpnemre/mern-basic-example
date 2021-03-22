const express = require("express");
// express().listen(5000);
require("dotenv").config();
const app =express();
const router = require("./routes/router")
// app.use("/getlist")
app.use("/", router) 




const port = process.env.PORT || 5000;
app.listen((port), ()=>{
    console.log(`I am listening on port ${port}`)
});