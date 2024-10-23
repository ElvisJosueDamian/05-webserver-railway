

const express=require('express')

const app= express()

const port = 8080

app.use(express.static('public2'))

app.get('/', (req, res)=>{
    res.send('home page')
})

app.get('/hola-mundo', (req,res) =>{
    res.send('hola mundo en su respectiva ruta')
})

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/05-webserver/public/404.html')
})

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})

