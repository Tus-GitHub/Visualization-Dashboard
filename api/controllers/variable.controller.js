import variableListing from "../models/variable.model.js";


export const getVariablesListing = async(req, res) => {
    try{
        const Values = await variableListing.find({}, {
            intensity:1,
            likelihood:1,
            relevance:1,
            start_year:1,
            country:1,
            topic:1,
            region:1,
            _id:0,
        });
        res.json(Values);
    }catch(error){
        res.status(500).json({error:error.message});    
    }
};