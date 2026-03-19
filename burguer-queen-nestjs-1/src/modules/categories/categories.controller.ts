import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';

@Controller('api/v1/categories')
@ApiTags("Categories")
export class CategoriesController {

    constructor(private categoryService: CategoriesService) { }

    @Get()
    @ApiOperation({
        description: 'Devuelve todas las categorias'
    })
    @ApiResponse({
        status: 200,
        description: 'Categorías devueltas correctamente',
    })
    getCategories() {
        return this.categoryService.getCategories();
    }

}
