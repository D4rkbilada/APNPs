const express = require('express')
const app = express()

app.get('/',function(req,res){
    
    res.send("Olá Miguel Arenhart!")
    
})

app.get('/msg',function(req,res){
res.send("essa mensagem é automática")




})

app.get('/layout',function(req,res){
    res.send("esse é o novo Layout")
    
    
    
    
    })

app.listen(3000,function(){
    
    console.log("Conexão inicializada")
    
})

