import { Controller, Post, Get, Request, UseGuards, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { CreateUserDto } from "./dto/User.dto";



@Controller ("app")
export class AppController {
  constructor(private authService: AuthService) {}


    @Post ("/login")
    @UseGuards(AuthGuard("local"))
  async login(@Body() createUserDto: CreateUserDto) {

    return this.authService.login(CreateUserDto);

    }

}


