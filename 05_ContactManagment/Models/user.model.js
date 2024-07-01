const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    userName:{
        type:String,
        required:[true, "User Name Require"]
    },
    email:{
        type:String,
        required:[true, "Email Required"],
        unique:[true, "Already this Email Exist"]
    },
    password:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

module.exports = mongoose.model("Users", userSchema)