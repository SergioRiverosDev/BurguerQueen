import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ProductExtraOption {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'name',
        type: String,
        required: false,
        description: 'Nombre de la opcion del extra'
    })
    name?: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        name: 'price',
        type: Number,
        required: true,
        description: 'Precio de la opcion del extra'
    })
    price: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        name: 'activate',
        type: Boolean,
        required: true,
        description: 'Indica si se ha activado la opcion del extra'
    })
    activate: boolean;
}