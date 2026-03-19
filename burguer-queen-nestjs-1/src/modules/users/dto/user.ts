import { ApiProperty } from "@nestjs/swagger";

export class User {

    @ApiProperty({
        name: 'email',
        type: String,
        required: true,
        description: 'Email del usuario'
    })
    email: string;

    @ApiProperty({
        name: 'password',
        type: String,
        required: true,
        description: 'Password del usuario'
    })
    password: string;

    @ApiProperty({
        name: 'address',
        type: String,
        required: true,
        description: 'Dirección del usuario'
    })
    address: string;

}