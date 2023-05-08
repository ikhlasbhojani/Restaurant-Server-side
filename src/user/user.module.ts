import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './user.service';
import {User, UserSchema} from 'src/schemas/user.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}
