import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePaymentIntentDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        name: 'secretKey',
        type: String,
        required: true,
        description: 'SecretKey de Stripe'
    })
    secretKey: string;

    @IsOptional()
    @IsNumber()
    @ApiProperty({
        name: 'amount',
        type: Number,
        required: false,
        description: 'Cantidad a pagar'
    })
    amount?: number;

    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'currency',
        type: String,
        required: false,
        description: 'Moneda'
    })
    currency?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        name: 'customer_id',
        type: String,
        required: false,
        description: 'Id del cliente'
    })
    customer_id?: string;
}
