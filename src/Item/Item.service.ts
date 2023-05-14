import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from 'src/dto/Item.dto';
import { Item } from 'src/schemas/Item.schema';


@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item.name) private itemModel: Model<Item>
  ) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }
}
