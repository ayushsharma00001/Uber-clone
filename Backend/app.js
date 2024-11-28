const dotenv = require("dotenv");
dotenv.config({});
const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user.routes.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>res.send("Hello"));

app.use("/users",userRoutes);


app.all("*",(req,res,next)=>{
    res.status(404).json({message:"Page not found..."});
});

app.use((err,req,res,next)=>{
    res.status(err.statusCode).json({message:err.message});
})


module.exports = app;