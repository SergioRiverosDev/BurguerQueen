import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'email',
        type: String,
        required: true,
        description: 'Email del usuario'
    })
    email: string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'password',
        type: String,
        required: true,
        description: 'password del usuario'
    })
    password: string;
}