const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.use(express.static(__dirname))

app.engine('hbs', expressHandlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.get("/", function(req, res){  
  res.render("graph.hbs")
})

app.listen(8080)