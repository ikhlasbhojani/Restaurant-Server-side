import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  password: string;


  @IsEnum(["user", "admin"])
  @IsString()
  role: string;

}