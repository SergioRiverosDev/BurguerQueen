import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ProductExtraOption } from "./product-extra-option-dto";

export class ProductExtraBlock {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del bloque'
    })
    name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'img',
        type: String,
        required: true,
        description: 'Imagen del bloque'
    })
    img: string;

    @IsNotEmpty()
    @IsArray()
    @ApiProperty({
        name: 'options',
        type: [ProductExtraOption],
        required: true,
        description: 'Opciones disponibles del bloque'
    })
    options: ProductExtraOption[];
}