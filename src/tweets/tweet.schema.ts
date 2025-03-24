import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema()
export class Tweet {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  tweet: string;

  @Prop({ required: true })
  day_of_week: string;

  @Prop({ required: true })
  month: number;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  day: number;

  @Prop({ required: true })
  timestamp: string;

  @Prop({ required: true })
  sentiment: number;

  @Prop({ required: true, type: [String] })
  tokens: string[];
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
