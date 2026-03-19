import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsObject } from "class-validator";
import { ProductDto } from "src/modules/products/dto/product-dto";

export class QuantityProductDto {

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        name: 'quantity',
        type: Number,
        required: true,
        description: 'Cantidad del producto'
    })
    quantity: number;

    @IsNotEmpty()
    @IsObject()
    @ApiProperty({
        name: 'product',
        type: ProductDto,
        required: true,
        description: 'Producto'
    })
    product: ProductDto;
}