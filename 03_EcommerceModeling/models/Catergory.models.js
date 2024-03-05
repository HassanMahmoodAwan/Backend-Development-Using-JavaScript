import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({

    name:{required:true, type:String, unique:true},
    description:String,

}, {timestamps:true})

export const Category = mongoose.model('Category', categorySchema)
