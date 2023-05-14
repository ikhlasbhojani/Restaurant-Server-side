import { IsString, IsNumber, IsObject } from 'class-validator';

export class CreateItemDto {


  @IsString()
  productName: string;

  @IsString()
  category: string;

  @IsString()
  price: string;
}