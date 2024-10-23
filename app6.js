

const express=require('express')

const app= express()

app.get('/',function (req,res){
    res.send('home page')
})

app.get('/02-hola-mundo', function(req,res){
    res.send('hola mundo en su respectiva ruta')
})

app.get('*',function (req, res){
    res.send('404 | page not found')

})

app.listen(8080);