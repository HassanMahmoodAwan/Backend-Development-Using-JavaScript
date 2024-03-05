const express = require("express")
require("dotenv").config()

const app = express()

app.get('/', (req, res)=>{
    res.send("Hello to Backend")
})
app.get('/json', (req, res)=>{
    res.json({
        name: "Hassan",
        age: 21
    })
})

app.listen(process.env.PORT, ()=>{
    console.log("App is running on 8080")
})