import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet } from './tweet.schema';
import { PaginationDto } from './dto/Pagination.dto';

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

  async getTweetsPaginated(paginationDto: PaginationDto) {
    try {
      const {
        page = 1,
        limit = 25,
        tweet,
        day_of_week,
        month,
        year,
        sentiment,
      } = paginationDto;
      const skip = (page - 1) * limit;
      const filter: {
        tweet?: {
          $regex: string;
          $options: string;
        };
        day_of_week?: string;
        month?: number;
        year?: number;
        sentiment?: number;
      } = {};

      if (tweet) {
        filter.tweet = { $regex: tweet, $options: 'i' };
      }
      if (day_of_week) {
        filter.day_of_week = day_of_week;
      }
      if (month) {
        filter.month = month;
      }
      if (year) {
        filter.year = year;
      }
      if (sentiment !== undefined) {
        filter.sentiment = sentiment;
      }

      console.log(filter);

      const [results, count] = await Promise.all([
        this.tweetModel.find(filter).skip(skip).limit(limit).exec(),
        this.tweetModel.countDocuments(filter).exec(),
      ]);

      return { page, page_size: limit, count, results };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
