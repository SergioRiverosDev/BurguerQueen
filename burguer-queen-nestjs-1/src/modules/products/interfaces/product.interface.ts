import { Mixed, ObjectId } from "mongoose";

export interface IProduct {
    name: string;
    price: number;
    extras: Mixed;
    img: string;
    category: ObjectId;
}
