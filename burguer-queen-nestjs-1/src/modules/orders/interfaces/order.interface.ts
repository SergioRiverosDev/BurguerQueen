import { ObjectId } from "mongoose";

export interface IOrder {
    _id?: string;
    address: string;
    date: Date;
    total: number;
    user: ObjectId;
    products: IQuantityProduct[];
    ticket?: number;
}

export interface IQuantityProduct {
    quantity: number;
    product: ObjectId;
}