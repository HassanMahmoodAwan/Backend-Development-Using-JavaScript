import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"


const connectDB = async function(){
    try {
        const connectInstance = await mongoose.connect(`${process.env.DATABASE_CONNECTION_URL}/${DB_NAME}`)
        console.log(connectInstance.connection.host)
    } catch (error) {
        console.error(`DB Connection FAILED: ${error}`)
        process.exit()
    }
}

export default connectDB