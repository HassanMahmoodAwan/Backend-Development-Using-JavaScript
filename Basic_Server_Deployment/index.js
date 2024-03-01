// import express from "express"        // Not Working 
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send("Hello to Backend")
})

app.listen("3000", ()=>{
    console.log("Server is Running")
})