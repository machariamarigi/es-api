import { Module } from '@nestjs/common';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsProviders } from './products.provider';

@Module({
  providers: [ProductsService, ...ProductsProviders],
  controllers: [ProductsController],
})
export class ProductsModule {}
