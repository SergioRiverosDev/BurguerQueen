import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@Controller('api/v1/products')
@ApiTags('Products')
export class ProductsController {

    constructor(
        private productService: ProductsService) { }

    @Get(':id')
    @ApiOperation({
        description: 'Devuelve un producto dado un id'
    })
    @ApiParam({
        name: 'id',
        type: String,
        required: true,
        description: 'El id del producto a buscar'
    })
    @ApiResponse({
        status: 200,
        description: 'Producto devuelto correctamente',
    })
    getProductsById(@Param('id') id: string) {
        return this.productService.getProductsById(id);
    }

    @Get('/category/:idCategory')
    @ApiOperation({
        description: 'Devuelve una lista de productos dado el id de una categoria'
    })
    @ApiParam({
        name: 'idCategory',
        type: String,
        required: true,
        description: 'El id de la categoria'
    })
    @ApiResponse({
        status: 200,
        description: 'Productos devuelto correctamente',
    })
    getProductsByCategory(@Param('idCategory') idCategory: string) {
        return this.productService.getProductsByCategory(idCategory);
    }

}
