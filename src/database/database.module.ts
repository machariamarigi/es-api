import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

const DATABASE_PROVIDER = {
  provide: 'DbConnectionToken',
  useFactory: async (): Promise<typeof mongoose> =>
    await mongoose.connect('mongodb://localhost:27017/electronicstore'),
};

@Module({
  providers: [DATABASE_PROVIDER],
  exports: [DATABASE_PROVIDER],
})
export class DatabaseModule {}
