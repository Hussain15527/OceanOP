const express= require('express');
const cors=require("cors")

const app=express();
const router=require("./routes/index");

app.use(cors())

app.get("/",require("./routes/index"));

app.listen(5000,()=>{
    console.log("listening to port 5000");
    
})