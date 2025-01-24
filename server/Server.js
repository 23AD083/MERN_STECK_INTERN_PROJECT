const http = require("http");
const fs = require("fs");

const jsonData = fs.readFileSync("product.json","utf-8");
console.log(jsonData);


//css
const htmlres =fs.readFileSync("http.html","utf-8",(err)=>{});
const server = http.createServer((request, response)=>{
   // response.writeHead(200,{"Content-Type":"application/json"})
   // response.end(jsonData);
let path = request.url;
response.writeHead(200,{"Content-Type":"text/html"})
if(path==="/home"  || path==="/"){
    response.end(htmlres);
}
else if(path==="/about"){
    response.end("About Page");
}
else if(path==="/contact"){
    response.end("Contact Page");
}
else if(path==="/product"){
    response.end("Product Page");
}
else{
   response.end("404 Page Not Found");
}

})
server.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})