import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderDto } from './dto/order-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/v1/orders')
@ApiTags("Orders")
export class OrdersController {

    constructor(private orderService: OrdersService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({
        description: 'Crea una orden'
    })
    @ApiBody({
        type: OrderDto,
        description: 'Crea una orden usando un OrderDto'
    })
    @ApiResponse({
        status: 201,
        description: 'Orden creada correctamente'
    })
    createOrder(@Body() order: OrderDto) {
        return this.orderService.createOrder(order);
    }

}
