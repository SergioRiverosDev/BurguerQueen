import { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import * as bcrypt from 'bcrypt'

export const userSchema = new Schema<IUser>({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    address: { 
        type: String,
        required: false
    }
});

userSchema.pre<IUser>('save', async function(){
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
});