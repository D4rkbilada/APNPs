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
    
    res.render('index.ejs',{})
    
})

app.get('/usuarios',function(req,res){
    
    res.render('usuarios.ejs',{usuarios:[

        {nome:'Miguel', email:'arenhartmiguel@gmail.com'},
        {nome:'Maria', email:'maria@hotmail.com'},
        {nome:'Tereza', email:'tereza@hotmail.com'},
        {nome:'Ana', email:'ana@hotmail.com'}

    ]})
    
})

app.listen(3000,function(){
    
    console.log("Conexão inicializada")
    
})

