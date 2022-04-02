if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const path = require('path');
const app = express();
const public = path.join(__dirname,'public')
const viewsPath = path.join(__dirname,'views')
const mongoose = require('mongoose');
// const workshopSeed = require('./seedDB/SeedWorkshop');
// const guidanceSeed = require('./seedDB/Seedguidance');
// const teachSeed = require('./seedDB/SeedTeaching');
// const talkSeed = require('./seedDB/SeedTalk');
const Workshop = require('./models/workshop.js');
const guidance = require('./models/guidance.js');
const Teach = require('./models/teaching.js');
const Talk = require('./models/talk');
// setup ejs templete and views location 
app.set('view engine','ejs');
app.set('views',viewsPath);
// set up static directory to serve
app.use(express.static(public));
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGODB_URL);
//talkSeed();
//teachSeed();
//workshopSeed();
//guidanceSeed();
app.get('/',(req,res)=>{
    res.render("home");
})

app.get('/information',(req,res)=>{
    res.render("info");
})

app.get('/workshop',async(req,res)=>{
    try{
        const workshops = await Workshop.find({});
    res.render("workshop",{workshops:workshops});
    }catch(err){
        res.send(err);
    }
})

app.get('/research',(req,res)=>{
    res.render("research");
})  

app.get('/student',async(req,res)=>{
    try{
        const guide = await guidance.find({});
    res.render("student",{guide:guide});
    }catch(err){
        res.send(err.message);
    }
    
})

app.get('/teaching',async(req,res)=>{
    try{
        const Teaching = await Teach.find({});
        res.render("teaching",{teaching:Teaching});
    }catch(err){
        res.send(err.message);
    }
   
})

app.get('/talk',async(req,res)=>{
    try{
        const talk = await Talk.find({});
        res.render("talk",{talk:talk});
    }catch(err){
        res.send(err.message);
    }

})


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`server running at ${process.env.PORT}`);
});