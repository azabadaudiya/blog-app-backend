import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const db= process.env.DATABASE;
// const connectToMongo = async () => {
//     const res=await mongoose.connect(db);
//     if(res){
//         console.log("connected");
//     }
// };
// export default connectToMongo;

mongoose.connect(db).then(() => console.log("database connected")).catch((err) => console.log(err))