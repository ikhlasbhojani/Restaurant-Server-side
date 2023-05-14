import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async user(@Body() createUserDto: CreateUserDto): Promise<any> {
    const result = await this.usersService.signUp(createUserDto);
    return result;
  }
}
