require('dotenv').config();
// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const express = require('express')
const { DB_NAME } = require('./constants.js')
// import connectDB from './DB/index.js'

const app = express()
// connectDB()
console.log(process.env.PORT)

;( async ()=>{
    try {
        console.log(process.env.PORT)
       await mongoose.connect(`${process.env.DATABASE_CONNECTION_URL}/${DB_NAME}`)
       
       app.on('error', (error)=>{
            console.error('Error while app with Database')
            throw error
       })

       app.listen(process.env.PORT, ()=>{
            console.log(`App is Listening on PORT: ${process.env.PORT}`)
       })

        
    } catch (error) {
        console.error(`Error while Connecting DB ${error}`)
        throw error
    }
})();