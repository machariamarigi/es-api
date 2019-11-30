import { Module } from '@nestjs/common';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsProviders } from './products.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ProductsService, ...ProductsProviders],
  controllers: [ProductsController],
})
export class ProductsModule {}
