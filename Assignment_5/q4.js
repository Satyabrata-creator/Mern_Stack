// Create a simple Node.js server that serves static HTML files. The server should be able
// to handle requests for different HTML files using routing and serve them accordingly.
const http = require('http');
const path=require('path');
const fs=require('fs')
const server=http.createServer((req,res) =>{
let url=req.url;
const fp=path.join(__dirname,"public")
if(url=='/'){
    fs.readFile(path.join(fp,'index.html'),'utf-8',(err,data)=>{
        if(err){
            res.write(err);
        }
        else{
            res.write(data);
        }
        res.end();
    })
}
else if(url=='/about'){
    fs.readFile(path.join(fp,"about.html"),'utf-8',(err,data)=>{
        if(err){
            res.end(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })
}
else{
    res.end('New route')
}
})
server.listen(5000,()=>{
    console.log("Server started");
    
})