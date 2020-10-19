const express = require('express')
const app = express()

app.get('/',function(req,res){
    
    res.send("Olá Miguel Arenhart!")
    
})

app.listen(3000,function(){
    
    console.log("Conexão iniciada na porta 3000")
    
})

