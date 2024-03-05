import mongoose from "mongoose"

const productSchema = new mongoose.Schema({

    name:{required:true, type:String},
    description:{type:String},
    price:{required:[true, "Need to mention Price"], type:Number, default:0},
    catergory: {
        required:true,
        type:    mongoose.Schema.Types.ObjectId,
        ref:     "Category"
    },
    ownedBy: {
        required:true,
        type:    mongoose.Schema.Types.ObjectId,
        ref:     "Vendor"
    }


}, {timestamps:true})

export const Product = mongoose.model('Product', productSchema)
