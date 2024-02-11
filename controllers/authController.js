import authModel from "../models/authModel.js";
import bcryptjs from 'bcryptjs'; 
import jwt from "jsonwebtoken";

class AuthController {
    static userRegistration = async(req,res) => {
        const {username,email,password} =req.body;
        try{
            if(username && email && password){
                const isUser= await authModel.findOne({email:email});
                if(!isUser){
                    const genSalt = await bcryptjs.genSalt(10);
                    const hashedPassword = await bcryptjs.hash(password,genSalt);
                    const newUser=authModel({username,email,password:hashedPassword});
                    const savedUser = await newUser.save();
                    if(savedUser){
                        return res.status(200).json({message : "registration success"});
                    }
                }
                else{
                    return res.status(400).json({message : "email already exists"});
                }

            }
            else{
                return res.status(400).json({message : "all fields require"});
            }
        }
        catch(err) {
            return res.status(400).json({message : err.message});
        }
    };

    static userLogin = async(req,res) => {
        const {email,password} = req.body;
        try{
            if(email && password){
                const isEmail = await authModel.findOne({email:email});
                if(isEmail){
                    if(isEmail.email === email && await bcryptjs.compare(password,isEmail.password)){
                        const token=jwt.sign({userID : isEmail._id} , "hii1234",{
                            expiresIn:"365d",
                        });
                        return res.status(200).json({
                            message:"login successfully",
                            token,
                            name:isEmail.username,
                        });
                    }
                    else{
                        return res.status(400).json({message : "Wrong credentials"});
                    }
                }
                else{
                    return res.status(400).json({message : "email not found"});
                }
            }
            else{
                return res.status(400).json({message : "all fields required"});
            }
        }catch(err){
            return res.status(400).json({message : err.message});
        }
    };
}

export default AuthController;