import categoryModel from "../models/categoryModel.js";

class CategoryController {
    static getAllCategories = async(req,res) => {
        try{
            const fetchAllCategories = await categoryModel.find({});
            return res.status(200).json(fetchAllCategories);
        }
        catch(err){
            return res.status(400).json({message:err.message});
        }
    };

    static addNewCategory= async(req,res) => {
        const {title} = req.body;
        try{
            if(title){
                const newCategory = new categoryModel({title});
                const savedCategory = await newCategory.save();
                if(savedCategory){
                    return res.status(200).json({message:"category added"});
                }
            }
            else{
                return res.status(400).json({message:"fields requried"});
            }
        }
        catch(err){
            return res.status(400).json({message:err.message});
        }
    };
    
}

export default CategoryController;