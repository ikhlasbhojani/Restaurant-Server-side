import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item extends Document {

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  price: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
