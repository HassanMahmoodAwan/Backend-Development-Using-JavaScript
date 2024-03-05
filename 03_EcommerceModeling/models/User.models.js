import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    userName:{required:true, type:String, unique:true, lowercase:true},

    email:{required:true, type:String, unique:true},

    password:{required:[true, "Need to provide Password"], type:String, min:[8], max:[16]}

}, {timestamps:true})

export const User = mongoose.model('User', userSchema)
