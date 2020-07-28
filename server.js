const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
// const PORT = 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({entended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/userdb", { useNewUrlParser: true });

//     console.log("Database Error: ", error);
// });

// app.post

// const databaseUrl = "workout";
// const collections = ["exercises"];
// const db = mongojs(databaseUrl, collections);


app.listen(PORT, ()=>{
    console.log("App running at: http://localhost:"+PORT)
})
