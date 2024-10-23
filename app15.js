

const express=require('express')
const hbs = require('hbs')
require('dotenv').config;
const app= express()
const port = process.env.PORT 

app.set('view engine','hbs')

hbs.registerPartials(__dirname + '/view/partials')

app.use(express.static('public3'))

app.get('/', (req, res)=>{
    res.render('home3', {
        nombre: 'Elvis Damián',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res)=>{
    res.render('generic', {
        nombre: 'Elvis Damián',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res)=>{
    res.render('elements', {
        nombre: 'Elvis Damián',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/05-webserver/public/404.html')
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})

