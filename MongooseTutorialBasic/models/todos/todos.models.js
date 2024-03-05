import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subTodo"
    }

}, {timestamps:true})


export const todo = mongoose.model("todo", todoSchema)