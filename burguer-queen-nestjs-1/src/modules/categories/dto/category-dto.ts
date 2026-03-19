import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsOptional, IsString, IsNotEmpty } from "class-validator";

export class CategoryDto {

    @IsUUID()
    @IsOptional()
    @ApiProperty({
        name: '_id',
        type: String,
        required: false,
        description: 'ID de la categoria'
    })
    _id?: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre de la categoria'
    })
    name: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'img',
        type: String,
        required: false,
        description: 'Imagen de la categoria'
    })
    img?: string;
}