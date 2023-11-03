 const express=require('express');
 const app=express();
 const path=require('path');
 const session=require('express-session');
 const{v4:uuidv4}=require("uuid");
 const router=require('./router');
 const nocache=require("nocache")
 
 //  your application can adapt to different hosting environments without having to change the code
 const port=process.env.PORT || 3000;

app.use(nocache());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

 app.set("view engine",'ejs');
// load static assets

 app.use('/static', express.static(path.join(__dirname, 'public')));
 app.use('/assets',express.static(path.join(__dirname,'public/assets')));
 app.use('/route',router); 
 

 app.get('/',(req,res)=>{
   if(!req.session.user){
      res.render("base", { title: "Login system" });
  
    }else{
      res.redirect('/route/dashboard');
    }
 })

 app.listen(port,()=>{
    console.log("Listennig to the server on http://localhost:3000/")
 })