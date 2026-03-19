import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongoConnectionService } from '../mongo-connection/mongo-connection.service';
import { OrderSchema } from './schemas/order.schema';
import { IOrder } from './interfaces/order.interface';
import { MongoConnectionModule } from '../mongo-connection/mongo-connection.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [MongoConnectionModule, UsersModule],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: 'ORDER_MODEL',
      useFactory: (db: MongoConnectionService) => db.getConnection().model<IOrder>('Order', OrderSchema, 'orders'),
      inject: [MongoConnectionService]
    }]
})
export class OrdersModule {}
