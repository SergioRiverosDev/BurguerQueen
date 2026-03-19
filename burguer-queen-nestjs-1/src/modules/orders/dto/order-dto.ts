import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsOptional, IsString, IsNotEmpty, IsObject, IsArray } from "class-validator";
import { UserDto } from "src/modules/users/dto/user-dto";
import { QuantityProductDto } from "./quantity-product-dto";

export class OrderDto {
    
    @IsUUID()
    @IsOptional()
    @ApiProperty({
        name: '_id',
        type: String,
        required: false,
        description: 'ID de la orden'
    })
    _id?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'address',
        type: String,
        required: false,
        description: 'Dirección de la orden'
    })
    address?: string;

    @IsNotEmpty()
    @IsObject()
    @ApiProperty({
        name: 'user',
        type: UserDto,
        required: true,
        description: 'Usuario de la orden'
    })
    user: UserDto;

    @IsNotEmpty()
    @IsArray()
    @ApiProperty({
        name: 'products',
        type: [QuantityProductDto],
        required: true,
        description: 'Productos de la orden'
    })
    products: QuantityProductDto[];
}

