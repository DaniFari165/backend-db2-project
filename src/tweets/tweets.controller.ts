import { Controller, Get, Post, Body } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { Tweet } from './tweet.schema';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Get()
  obtenerTweets() {
    return this.tweetsService.obtenerTweets();
  }

  @Post()
  agregarTweet(@Body() tweet: Tweet) {
    return this.tweetsService.agregarTweet(tweet);
  }
}
