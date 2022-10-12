const mongoose= require("mongoose")
const express=require("express")
const bodyparser=require("body-parser")
// const { application } = require('express');

mongoose.conect('mongodb://127.0.0.1:27120/PortFolio');
const db=mongoose.conect;
// 

const app=express();
app.use(express.static('Public');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}))


app.post('/contact',(req,res)=>{

})


app.get('/',(req,res)=>{
    res.set({'ALLOW-ACCESS-ORIGIN':'*'})
    return res.redirect('contact.html')
})



const port =process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`server running on:${port}`)
})
