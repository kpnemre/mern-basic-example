const express = require("express")

const router= express.Router()

router.get("/getlist", (req,res)=>{
    console.log("Home page")
    res.send("Home page")

})

// router.get("/save", (req,res)=>{
//     console.log("Home page")
//     res.send("Home page")

// })




module.exports= router;