import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';



@Module({
  imports: [UserModule, AuthModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/restaurant-app')],
  controllers: [AppController, UserController],
  providers: [],
  exports: [],
})
export class AppModule {}
