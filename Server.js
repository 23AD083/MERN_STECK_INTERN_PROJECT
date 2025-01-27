const express=require('express');
const app=express();
const http=require('http');
const path = require('path');
const {engine}=require('handlebars');
app.engine('hbs',engine({extname:'hbs',defaultLayout:'false'}));
app.use(express.static(path.join(__dirname,'Public')));
app.set("view engine","hbs");
app.get('/index',(req,res)=>{
    let data="Naviya";
    let array=[1,2,3,4,5,6,7,8,9];
    res.render('index',{data,array} );
   
});
app.get('/About',(req,res)=>{
    let array=[1,2,3,4,5,6,7,8,9];
    res.render('About',{array} );
    

    
});
app.get('/Contact',(req,res)=>{
    res.render('Contact' );
    
});
app.listen(300,()=>

    {console.log('Server is running on port 300')});