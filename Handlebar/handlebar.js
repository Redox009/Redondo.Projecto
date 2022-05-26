const express = require('express')
const fs = require('fs')
const app = express()

const { engine } = require('express-handlebars')

const engineDirs = engine({
  extname: '.hbs',
  defaultLayout: `${__dirname}/views/index.hbs`,
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`
})

app.engine('hbs', engineDirs)
app.set('views', './views')
app.set('view engine', 'hbs')

const peliculas =[
    {
        titulo: "Avengers" ,
        descripcion: "lorem"  ,
        imagen: "Avengers.png" ,
        id: 1  
    },
    {
        titulo: "Ultron" ,
        descripcion: "lorem" ,
        imagen: "Ultron.png" ,
        id: 2 
    },
    {
        titulo: "Endgame" ,
       descripcion: "lorem" ,
        imagen: "Endgame.png" ,
        id: 3  
    }
]
    

app.get('', (req, res) => {
    return res.render('layouts/index', peliculas)
  })










const server = app.listen(8080, () => {
    console.log("servidor on")
})
server.on('error', (error) => console.log ('error en on'))


