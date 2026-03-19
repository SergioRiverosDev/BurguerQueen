import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsObject, IsOptional, IsString, IsUUID } from "class-validator";
import { CategoryDto } from "src/modules/categories/dto/category-dto";
import { ProductExtraDto } from "./product-extra-dto";

export class ProductDto {

    @IsUUID()
    @IsOptional()
    @ApiProperty({
        name: '_id',
        type: String,
        required: false,
        description: 'ID del producto'
    })
    _id?: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'name',
        type: String,
        required: true,
        description: 'Nombre del producto'
    })
    name: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'img',
        type: String,
        required: false,
        description: 'Imagen del producto'
    })
    img: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'price',
        type: Number,
        required: true,
        description: 'Precio del producto'
    })
    price: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'category',
        type: CategoryDto,
        required: true,
        description: 'Categoria del producto'
    })
    category: CategoryDto;

    @IsOptional()
    @IsArray()
    @ApiProperty({
        name: 'extras',
        type: [ProductExtraDto],
        required: false,
        description: 'Extras del producto'
    })
    extras?: ProductExtraDto[];
}