import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title : {
        type: String,
 },
 category:{
    type:mongoose.Schema.Types.ObjectId,
    refer:"categorie",
 },
 description: {
    type:String,
 },
 thumbnail: {
    type:String,
 },
 user:{
    type: mongoose.Schema.Types.ObjectId,
    refer:"user",
 },
});

const blogModel = mongoose.model("blog",blogSchema);

export default blogModel;