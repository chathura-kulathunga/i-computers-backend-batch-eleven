import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            unique: true,
            required: true
        },
        name : {
            type: String,
            required: true
        },
        altNames : {
            type: [String],
            default: [],
            required: true
        },
        description :{
            type: String,
            required: true
        },
        price :{
            type: Number,
            required: true
        },
        labeledPrice : {
            type: Number,
            required: true
        },
        images :{
            type: [String],
            default: ["/default-product-1.png", "/default-product-2.png"],
            required: true
        },
        isAvailable : {
            type: Boolean,
            required: true,
            default: true,
        },
        category :{
            type: String,
            required: false
        },
        stock:{
            type: Number,
            required: true,
            default: 0
        },
        
    }
)