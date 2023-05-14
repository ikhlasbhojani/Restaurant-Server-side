import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from 'src/dto/Item.dto';


@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    return await this.itemService.create(createItemDto);
  }

  @Get()
  async findAll() {
    return await this.itemService.findAll();
  }
}




