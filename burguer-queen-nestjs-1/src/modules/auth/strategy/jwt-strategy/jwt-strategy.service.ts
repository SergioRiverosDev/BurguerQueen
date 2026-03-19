import { JwtPayload } from './../../dto/jwt-payload';
import { UsersService } from './../../../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
 
    constructor(
        private userService: UsersService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'discoduroderoer'
        });
    }

    /**
     * Cada vez que ejecutemos un endpoint con seguridad, pasara por aquí 
     * y almacenará en "user" el usuario que nosotros hemos metido en el login
     * @param payload 
     * @returns 
     */
    async validate(payload: JwtPayload){
        const user = await this.userService.findUserbyEmail(payload.email);
        if(!user){
            throw new UnauthorizedException();
        }
        user.password = undefined;
        return user;
    }


}
