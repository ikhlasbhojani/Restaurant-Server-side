import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'src/schemas/Item.schema';
import { ItemService } from './item.service';
import { ItemController } from './Item.controller';



@Module({

    imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
    controllers: [ItemController],
    providers: [ItemService],
})

export class ItemModule {};