const http = require("http");
const path = require("path");
const fs = require("fs");
const url=require("url");
const data=fs.readFileSync(path.join(__dirname,"template","template.html"),"utf-8");
const data1=fs.readFileSync(path.join(__dirname,"template","product.html"),"utf-8");
const jsondata=JSON.parse(fs.readFileSync("product.json","utf-8"));//172.31.92.37
let productArray=jsondata.map((prod)=>
{
    let output=data1.replace("{{%PRODUCTNAME%}}",prod.productName);
    output=output.replace("{{%IMAGE%}}",prod.productImage);
    output=output.replace("{{%ID%}}",prod.id);
    output=output.replace("{{%PRICE%}}",prod.price);
    output=output.replace("{{%MODNAME%}}",prod.modeName);
    output=output.replace("{{%MODNUMBER%}}",prod.modelNumber);
    output=output.replace("{{%SIZE%}}",prod.size);
    output=output.replace("{{%CAMERA%}}",prod.camera);
    output=output.replace("{{%COLOR%}}",prod.color);
    return output
})

function renderProduct(prod) {
    let output = data1.replace("{{%IMAGE%}}", prod.productImage)
    output = output.replace("{{%MODNAME%}}", prod.modeName)
    output = output.replace("{{%NAME%}}", prod.name)
    output = output.replace("{{%%MODNUMBER%%}}", prod.modelNumber)
    output = output.replace("{{%SIZE%}}", prod.size)
    output = output.replace("{{%TYPE%}}", prod.camera)
    output = output.replace("{{%PRICE%}}", prod.price)
    output = output.replace("{{%COLOR%}}", prod.color)
    output = output.replace("{{%ID%}}", prod.id)
  
    return output
  }
productArray=productArray.join(",");
// console.log(productArray);

const server = http.createServer((req, res) => {
    let path = req.url
  
  
    path = path.toLowerCase()
    let { query, pathname } = url.parse(req.url, true)
    pathname = pathname.toLowerCase()
    console.log(pathname);
    if(path==="/home"  || path==="/"){
        res.end(data.replace("{{%CONTENT%}}","You are at Home page "));
    }
    else if(path==="/about"){
        res.end(data.replace("{{%CONTENT%}}","You are at about page "));
    }
    else if(path==="/contact"){
        res.end(data.replace("{{%CONTENT%}}","You are at contact page "));
    }
    else if(path.indexOf("/products")){

        if (query.id) {
            let id = query.id * 1
      
      
            let findOne = jsonData.find(item => item.id === id)
            res.end(data.replace("{{%CONTENT%}}", renderProduct(findOne)))
      
          }
          else {
      
            res.end(data.replace("{{%CONTENT%}}", productArray))
          }
      
      
        }
        else res.end("404")
      
      })
      
      server.listen(3000, () => console.log("server"))