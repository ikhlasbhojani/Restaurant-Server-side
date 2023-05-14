import {
  Body,
  Controller,
  Post,
  UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/dto/SignIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }
}