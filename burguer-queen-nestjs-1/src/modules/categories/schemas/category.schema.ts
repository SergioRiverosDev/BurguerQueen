import { Schema } from "mongoose";
import { Types } from "mongoose";
import { ICategory } from "../interfaces/category.interface";

export const categorySchema = new Schema<ICategory>({
    name: { 
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
});