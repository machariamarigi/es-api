import { Connection } from 'mongoose';

import { ProductsSchema } from '../schemas/product.schema';

export const ProductsProviders = [
  {
    provide: 'ProductsModelToken',
    useFactory: (connection: Connection) => connection.model('Products', ProductsSchema),
    inject: ['DbConnectionToken'],
  },
];
