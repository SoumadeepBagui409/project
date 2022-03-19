const express = require('express');
const path = require('path');
const app = express();
const public = path.join(__dirname,'public')
const viewsPath = path.join(__dirname,'views')

// setup ejs templete and views location 
app.set('view engine','ejs');
app.set('views',viewsPath);
// set up static directory to serve
app.use(express.static(public));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render("home");
})

app.get('/information',(req,res)=>{
    res.render("info")
})

app.get('/workshop',(req,res)=>{
    res.render("workshop");
})

app.get('/research',(req,res)=>{
    res.render("research");
})  

app.get('/student',(req,res)=>{
    res.render("student");
})

app.get('/teaching',(req,res)=>{
    res.render("teaching");
})

app.get('/talk',(req,res)=>{
    res.render("talk")
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server running at ${process.env.PORT}`);
});