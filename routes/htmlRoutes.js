// const db = require("../models");

// module.exports = function(app){
//     app.get("/exercise", (req, res) =>{
//         res.sendFile(path.join(__dirname + "/public/exercise.html"));
//     })

//     app.get("/stats", (req, res)=>{
//         res.sendFile(path.join(__dirname + "/public/stats.html"))
//     })

// }

const router = require("express").Router();
const path = require("path");

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
})


module.exports