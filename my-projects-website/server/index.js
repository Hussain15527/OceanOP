const express= require('express');


const app=express();

app.get("/",(req,res)=>{
    res.send("hello this is the backend server is it running?")
})

app.listen(5000,()=>{
    console.log("listening to port 5000");
    
})