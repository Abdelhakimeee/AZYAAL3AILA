import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        required:true,
        min:5,
        max:15
    }
},{timestamps:true});

export const User = mongoose.model('User',userSchema);