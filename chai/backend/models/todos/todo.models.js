import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({},{
    timestamps:true
})

export const todos=mongoose.model("todo",todoSchema);