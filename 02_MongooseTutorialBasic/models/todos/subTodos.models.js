import mongoose from "mongoose";

const subTodosSchema = new mongoose.Schema({
    title:String,
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true})

export const subTodo = mongoose.model("subTodo", subTodosSchema)