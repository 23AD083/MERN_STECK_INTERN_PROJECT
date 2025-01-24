const fs =require("fs")

fs.writeFile("thread.txt","file 2",(err)=>{
    fs.appendFile("thread.txt","appended\n",(err,data)=>{ 
        fs.readFile("thread.txt","utf8",(err,data)=>{ console.log(data) 

        })
    })

}) // why because --the it takes tim eto excuted it snd to the backgorund sever to run 

// const fileData1=fs.appendFileSync("thread1.txt","utf8")
console.log(fileData1);
// const file
// console.log("thread function")
//outside the func will run first 
//  const fileData=fs.readFileSync("thread.txt","utf-8")
// console.log(fileData);
// console.log("outside");

// const fileData1=fs.writeFileSync("")
