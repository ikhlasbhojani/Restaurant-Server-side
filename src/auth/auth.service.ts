import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
  
    async login(user: any) {
      const payload = { username: user.username, email: user.email, role: user.role };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}
