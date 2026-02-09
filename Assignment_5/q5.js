// Create a basic Express.js application with multiple routes that render different HTML
// pages. Use the express module and serve static files such as CSS and images.
const express=require('express');
const path=require('path')
let server=express();
server.use(express.static(path.join(__dirname,"public")));
server.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
server.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/about.html"))
})
server.listen(5000,()=>{
    console.log('Server started');
    
})
