const express=require("express")
const app=express()
const fs=require("fs")


app.get('/',(req,res)=>{
    res.send("salam")
})

app.get('/employees',(req,res)=>{
    fs.readFile('./data.json','utf8',(err,data)=>{
    if(err){
        res.send(err)
    }
    else{
        const employees=JSON.parse(data)
        res.send(employees);
        
    }
})


}) 

app.listen(3000,()=>{
    console.log("Server calisir");
    
})