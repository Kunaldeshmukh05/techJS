import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    productImage:{
        type:String,
    },
        stock:{
        type:Number,
        default:0
    }
}, {
    timestamps: true
});

export const Product = mongoose.model("Product", productSchema);
// File: chai/backend/models/todos/category.model.js
// --- a/file:///e%3A/techJS/chai/backend/models/todos/category.model.js
// +++ b/file:///e%3A/techJS/chai/backend/models/todos/category.model.js   