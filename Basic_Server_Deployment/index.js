// import express from "express"        // Not Working 
require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send("Hello to Backend")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is Running")
})