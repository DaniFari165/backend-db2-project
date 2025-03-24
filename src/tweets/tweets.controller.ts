import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { Tweet } from './tweet.schema';
import { PaginationDto } from './dto/Pagination.dto';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Get()
  obtenerTweets() {
    return this.tweetsService.obtenerTweets();
  }

  // @Get()
  // async getTweetsPaginated(@Query() PaginationDto: PaginationDto) {
  //   const { page, limit, text, dayOfWeek, month, year } = PaginationDto;
  //   return this.tweetsService.getTweetsPaginated(page, limit, text, dayOfWeek, month, year);
  // }
}
