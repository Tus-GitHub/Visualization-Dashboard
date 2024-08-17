import mongoose from "mongoose";

const variableSchema = new mongoose.Schema(
    {
        end_year:{
            type: Number,
            required: false,
            default: null,
        },
        intensity:{
            type : Number,
            required: false,
        },
        sector:{
            type: String,
            required: false,
        },
        topic:{
            type: String,
            required: false,
        },
        insight:{
            type: String,
            required: false,
        },
        url:{
            type: String,
            required: false,
        },
        region:{
            type: String,
            required: false,
        },
        start_year:{
            type: Number,
            required: false,
            default: null,
        },
        impact:{
            type: Number,
            required: false,
        },
        added:{
            type: Date,
            required: true,
        },
        published:{
            type: Date,
            required: false,
        },
        country:{
            type: String,
            required: false,
        },
        relevance:{
            type:Number,
            required: false,
        },
        pestle:{
            type: String,
            required: false,
        },
        source:{
            type: String,
            required: false,
        },
        title:{
            type: String,
            required: false,
        },
        likelihood:{
            type: Number,
            required: false,
        },
    }
)