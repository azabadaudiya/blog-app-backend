import mongoose from "mongoose";
import Express  from "express";
const authSchema = new mongoose.Schema({
    username : {
        type: String,
 },
 email:{
    type:String,
 },
 password:{
    type:String,
 }
});

const authModel = mongoose.model("user",authSchema);

export default authModel;