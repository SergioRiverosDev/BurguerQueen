
import { Schema, Types } from "mongoose";
import { IProduct } from "../interfaces/product.interface";

export const productSchema = new Schema<IProduct>({
    name: { 
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    extras: { 
        type: Object,
        required: false
    },
    category: {
        type: Types.ObjectId, 
        ref: 'Category',
        required: true
    }
});
