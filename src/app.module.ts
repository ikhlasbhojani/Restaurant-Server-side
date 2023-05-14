import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ItemModule } from './Item/Item.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/myDatabase'),
    UserModule,
    AuthModule,
    ItemModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 