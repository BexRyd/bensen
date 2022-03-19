const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const educationApi = require('./apiEducation')


const app = express()
app.use(bodyParser.json())

app.use('/education',educationApi)

const handleStaticFiles = express.static(path.join(__dirname, '..', 'client', 'build'))
app.use(handleStaticFiles)



app.listen(8080, ()=>{
    console.log('Server started on Port ')
})

