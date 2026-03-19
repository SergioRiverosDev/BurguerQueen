
import { Schema, Types } from "mongoose";
import { IOrder } from "../interfaces/order.interface";

export const OrderSchema = new Schema<IOrder>({
    address: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: new Date()
    },
    total: {
        type: Number
    },
    products: {
        type: [Object],
        required: true
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    ticket: {
        type: Number,
        required: false
    }
});