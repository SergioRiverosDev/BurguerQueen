import { ConflictException, Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserDto } from './dto/user-dto';
import { Model, Types } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<IUser>
    ) { }

    async create(user: UserDto) {

        // Buscamos si existe
        const userExists = await this.findUserbyEmail(user.email);
        if (userExists) {
            throw new ConflictException('El usuario con email ' + user.email + ' existe')
        }

        // Creao el documento del usuario
        const u = new this.userModel(user);
        await u.save();
        // Le quito el password para no mostrarlo
        u.password = undefined;
        return u;
    }

    /**
    * Busca el usuario por su email
    * @param email 
    * @returns 
    */
    findUserbyEmail(email: string) {
        return this.userModel.findOne({ email: email.toLowerCase() })
    }

    /**
    * Busca el usuario por su email
    * @param email 
    * @returns 
    */
    findUserbyEmailNoPassword(email: string) {
        return this.userModel.findOne({ email: email.toLowerCase() }, { password: 0 })
    }

}
