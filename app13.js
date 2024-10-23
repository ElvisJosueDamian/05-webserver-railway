

const express=require('express')

const app= express()

const port = 8080

app.set('view engine','hbs')

app.use(express.static('public3'))

app.get('/', (req, res)=>{
    res.render('home2', {
        nombre: 'Elvis Damián',
        titulo: 'Curso de Node'
    })
})

app.get('/generic'(), (req,res) =>{
    res.sendFile(__dirname + '/05-webserver/public3/generic.html')
})

app.get('/elements'(), (req,res) =>{
    res.sendFile(__dirname + '/05-webserver/public3/elements.html')
})

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/05-webserver/public/404.html')
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})

