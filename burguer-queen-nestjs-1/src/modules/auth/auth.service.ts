import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth-dto';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtStrategyService } from './strategy/jwt-strategy/jwt-strategy.service';
import { JwtPayload } from './dto/jwt-payload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService){
    }
    
    /**
     * Valida si el usuario existe y su pass es correcta
     * @param authCredentials 
     * @returns 
     */
    async validateUser(authCredentials: AuthDto){

        // Busco si existe el usuario en la base de datos
        const user = await this.userService.findUserbyEmail(authCredentials.email);
        
        if(user){

            // Comprobacion de la contraseña
            const passwordOk = await bcrypt.compare(authCredentials.password, user.password);

            if(passwordOk){
                return user;
            }

        }
        return null;
    }

    /**
     * Nos logueamos en nuestra app, devolviendo un accessToken
     * @param authCredentials 
     * @returns 
     */
    async login(authCredentials: AuthDto){

        // Validamos si existe el usuario
        const user = await this.validateUser(authCredentials);
        if(!user){
            throw new UnauthorizedException("Credenciales inválidas");
        }

        // Creamos nuestro payload
        const payload: JwtPayload = {
            email: user.email
        }

        // Firmamos nuestro payload
        return {
            accessToken: this.jwtService.sign(payload)
        }

    }
}
