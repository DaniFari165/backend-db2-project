import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tweet extends Document {
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

  @Prop({ type: [String] })
  tokens: string[];
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
