const mongoose= require("mongoose")
const express=require("express")
const bodyparser=require("body-parser")

mongoose.connect('mongodb://127.0.0.1:27017/PortFolio');
const db=mongoose.connection;
db.on('erro',()=>console.log('error in connecting database'))
db.once('open',()=>console.log("database connected"))
// 

const app=express();
app.use(bodyparser.json());
app.use(express.static('Public'));
app.use(bodyparser.urlencoded({
    extended:true
}))


app.post('/contact',(req,res)=>{
    name=req.body.name,
    email=req.body.email,
    phone=req.body.phone,
    subject=req.body.subject,
    message=req.body.message

    var data={
        "name":name,
        "email":email,
        "phone":phone,
        "subject":subject,
        "message":message
    }
    db.collection('user').insertOne(data,(error,collection)=>{
        if(error){
            throw error;
        }else{
            console.log("success")
        }
        return res.redirect('message_sent.html')
    })
})

app.get('/',(req,res)=>{
    res.set({'ALLOW-ACCESS-ORIGIN':'*'})
    return res.redirect('index.html')
})



const port =process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server running on:${port}`)
})
