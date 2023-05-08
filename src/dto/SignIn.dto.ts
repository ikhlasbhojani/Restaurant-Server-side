import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class SignInDto{

    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
  @IsString()
    password: string;

}