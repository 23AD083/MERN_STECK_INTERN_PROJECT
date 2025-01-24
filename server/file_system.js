const fs=require("fs");
// fs.writeFile("sample.txt","created a file  fs\n",(err)=>{})// 
// fs.appendFile("sample.txt","append a file in fs",(err)=>{})
// fs.readFile("sample.txt",(err,data)=>{
//     console.log(data);
//     console.log(data.toString());
// })
// case 2 method :
// fs.readFile("sample.txt","utf8",(err,data)=>{
//     console.log(data);
// })
// fs.unlink("sample.txt",()=>{})

    //3 
  
    fs.writeFile("sample.txt","this is a file ",(err)=>{})

    fs.readFile("sample.tt",(err,data)=>{
        console.log(data.toString());
    })
    process.on("uncaughtException",(err)=>{
        console.log(err.message);
    })

    fs.mkdir("folder",(err)=>{
    })
    fs.rmdir("folder",(err)=>{})