import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet, TweetDocument } from './tweet.schema';

@Injectable()
export class TweetsService {
  constructor(@InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>) {}

  async obtenerTweets(): Promise<Tweet[]> {
    return this.tweetModel.find().exec();
  }

  async agregarTweet(tweet: Tweet): Promise<Tweet> {
    const nuevoTweet = new this.tweetModel(tweet);
    return nuevoTweet.save();
  }
}
