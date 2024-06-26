const express = require('express')
require('dotenv').config()
const contactRoutes = require('./Routes/ContactRoutes')
const errorHandler = require('./Middlewares/errorHandler')

const app = express()
const Port = process.env.PORT ?? 3000

app.use(express.json())
app.use('/api/contacts', contactRoutes)
app.use(errorHandler)

app.listen(Port, ()=>{
    console.log(`Server Running on ${Port} port`);
})