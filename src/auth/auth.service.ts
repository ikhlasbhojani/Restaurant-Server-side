import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  
  async logIn(user: any) {
    const payload = { username: user.username, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
