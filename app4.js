

const express=require('express')

const app= express()

app.get('/',function (req,res){
    res.send('hola que tal')
})

app.listen(8080);