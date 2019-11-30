import { Controller, Get } from '@nestjs/common';
import * as _ from 'lodash';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts(): any {
    return this.productService.findAll().then(
      products => {
        return products.map(product => _.omit(product.toJSON(), ['sales']));
      },
    );
  }
}
