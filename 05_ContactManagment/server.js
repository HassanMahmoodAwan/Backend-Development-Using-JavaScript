const express = require('express')
require("dotenv").config()
const contactRoutes = require('./Routes/ContactRoutes')
const userRoutes = require("./Routes/UserRoutes")
const errorHandler = require('./Middlewares/errorHandler')
const dbConnection = require('./Config/db')
const verifyToken = require('./Middlewares/verifyTokenHandler')

const app = express()

// ====== Middlewares =======
app.use(express.json())
app.use('/api/contacts', contactRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

app.get("/", (req, res)=>{
    res.send('<h1>Contact Mangment System</h1>')
})

// ======== MongoDB Connection =========
dbConnection()


const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`App is Running on Port ${PORT}`)
})