const express = require('express')
const app = express()
var bodyparser = require('body-parser')
var cookieparser = require('cookie-parser')
var path = require('path')


app.use(cookieparser())

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:false}))


app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname,"public")))

app.get('/',function(req,res){
    
    res.send("Olá Miguel Arenhart!")
    
})

app.listen(3000,function(){
    
    console.log("Conexão inicializada")
    
})

