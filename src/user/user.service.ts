import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ email: createUserDto.email }).exec();

    if (existingUser) {
      throw new BadRequestException(`${createUserDto.email} is already registered`);
    }

    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
