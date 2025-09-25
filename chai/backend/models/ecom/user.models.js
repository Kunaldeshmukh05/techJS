import mongoose from "mongoose";

const schema = new mongoose.Schema({},{})

export const users = mongoose.model("users",userSchema)