import mongoose from "mongoose"

const vendorSchema = new mongoose.Schema({

    userName:{required:true, type:String, unique:true, lowercase:true},

    email:{required:true, type:String, unique:true},

    password:{required:[true, "Need to provide Password"], type:String, min:[8], max:[16]}

}, {timestamps:true})

export const Vendor = mongoose.model('Vendor', vendorSchema)
