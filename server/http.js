const http=require('http');
const url=require("url");
// const fs=require("fs");
const server=http.createServer((req,res)=>{
    let {Query}=url.parse(req.url,true)
    //desturcture the query
    console.log(Query.id);
    let{id,name}=Query;
    console.log(id,name);
    console.log(req.url);

    fs.readFile("http.html","utf-8"{
    res.writeHead(200,{"Content-Type":"text/html"});//2 param -status and 
    res.end(data);
    })
    res.end("Hello World");//to end sever 
})
//to pass a port num 
server.listen(3000,()=>{
    console.log("server is running on port 3000");
})
// // //why the browser is loading 


// const http=require("http");
// const server=http.createServer((req,res)=>{
//     res.end("Hello World");
// })
// server.listen(3000,()=>{
//     console.log("server is running on port 3000");
// })