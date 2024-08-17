import variableListing from "../models/variable.model.js";

export const getVariableListing = async(req, res) => {
    try{
        const variable = await variableListing.find();
        res.json(variable);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};