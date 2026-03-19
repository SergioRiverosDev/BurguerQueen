import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNotEmpty, IsArray } from "class-validator";
import { ProductExtraBlock } from "./product-extra-block-dto";

export class ProductExtraDto {

    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'label',
        type: String,
        required: false,
        description: 'Texto del extra'
    })
    label?: string;

    @IsNotEmpty()
    @IsArray()
    @ApiProperty({
        name: 'blocks',
        type: [ProductExtraBlock],
        required: true,
        description: 'Texto del extra'
    })
    blocks: ProductExtraBlock[]
}
