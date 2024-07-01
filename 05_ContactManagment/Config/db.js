const mongoose = require("mongoose")
require('dotenv').config()

const MONGODB_URL = process.env.MONGODB_URL

async function dbConnection(){
    try {
        const connect = await mongoose.connect(MONGODB_URL)
        console.log("MongoDB Connect Successfully!")
        console.log(connect.connection.host)
    } catch (error) {
        console.log("Error in Connection: ", error)
        process.exit(1)
    }
}

module.exports = dbConnection