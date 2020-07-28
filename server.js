const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({entended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/userdb", { useNewUrlParser: true });

app.get("/exercise", (req, res) =>{
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
})


app.listen(PORT, ()=>{
    console.log("App running at: http://localhost:"+PORT)
})
