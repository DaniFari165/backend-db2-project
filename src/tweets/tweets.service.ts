import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet } from './tweet.schema';

@Injectable()
export class TweetsService {
  constructor(@InjectModel(Tweet.name) private tweetModel: Model<Tweet>) {}

  async obtenerTweets(): Promise<Tweet[]> {
    return this.tweetModel.find().exec();
  }

  async agregarTweet(tweet: Tweet): Promise<Tweet> {
    const nuevoTweet = new this.tweetModel(tweet);
    return nuevoTweet.save();
  }

  async getTweetsPaginated(page: number = 1, limit: number = 25, text: String, dayOfWeek: String, month: number, year: number) {
    try {
      const skip = (page - 1) * limit;
      const filter: any = {}

      if (text) {
        filter.text = { $regex: text, $options: 'i' };
      }
      if (dayOfWeek) {
        filter.dayOfWeek = dayOfWeek;
      }
      if (month) {
        filter.month = month;
      }
      if (year) {
        filter.year = year;
      }

      const [results, count] = await Promise.all([
        this.tweetModel.find(filter).skip(skip).limit(limit).exec(),
        this.tweetModel.countDocuments(filter).exec(),
      ]);

      return { page, page_size: limit, count, results }
      } catch (error) {
      throw new BadRequestException('Failed to fetch cats');
    }
  }
}