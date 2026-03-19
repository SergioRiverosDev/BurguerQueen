import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, isNotEmpty } from "class-validator";

export class UserDto {

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
        description: 'Password del usuario'
    })
    password: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'address',
        type: String,
        required: false,
        description: 'Dirección del usuario'
    })
    address?: string;

}