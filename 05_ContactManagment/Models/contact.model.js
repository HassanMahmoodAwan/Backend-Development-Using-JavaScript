const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Users"
    },
    name:{
        type: String,
        required: [true, "Name is Required"]
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:[true, "Phone is Required"]
    }, 
},
{
    timestamps:true
})

module.exports = mongoose.model("Contacts", contactSchema)