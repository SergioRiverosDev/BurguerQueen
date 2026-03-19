import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongoConnectionModule } from '../mongo-connection/mongo-connection.module';
import { MongoConnectionService } from '../mongo-connection/mongo-connection.service';
import { IUser } from './interfaces/user.interface';
import { userSchema } from './schemas/user.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongoConnectionModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'USER_MODEL',
      useFactory: (db: MongoConnectionService) => db.getConnection().model<IUser>('User', userSchema, 'users'),
      inject: [MongoConnectionService]
    }
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule { }
