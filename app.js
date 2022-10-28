const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connection to mongodb
mongoose.connect("mongodb://127.0.0.1/todo_express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Middle-wares
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");


app.use(require("./routes/index"));
app.use(require("./routes/todo"));

app.listen(3000,"127.0.0.1",() => {
    console.log("Server is Running at port no 3000");
});

