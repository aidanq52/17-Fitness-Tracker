const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
// const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/userdb", { 
    useNewUrlParser: true,
    useFindAndModify: false
});


// require("./routes/htmlRoutes")(app);
// require("./routes/workoutController")(app);

app.use(require("./routes"));

app.listen(PORT, ()=>{
    console.log("App running at: http://localhost:"+PORT)
})
