import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName: String,
    Email: {
        type: String,
        required:true,
        unique: true,
        lowercase:true
    },
    password: {
        type:String,
        required:[true, "Password must be Required"],
    },

}, {timestamps:true})

export const User = mongoose.model('User', userSchema)

// Note(Interview): when User -> in MongoDB becomes users.