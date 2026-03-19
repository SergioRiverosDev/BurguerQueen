import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongoConnectionModule } from '../mongo-connection/mongo-connection.module';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './strategy/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    MongoConnectionModule,
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'discoduroderoer',
      signOptions: { expiresIn: '9999 years' }
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategyService
  ]
})
export class AuthModule {}
