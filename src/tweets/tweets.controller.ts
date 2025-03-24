import { Controller, Get, Query } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { PaginationDto } from './dto/Pagination.dto';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  // @Get()
  // obtenerTweets() {
  //   return this.tweetsService.obtenerTweets();
  // }

  @Get()
  async getTweetsPaginated(@Query() paginationDto: PaginationDto) {
    return this.tweetsService.getTweetsPaginated(paginationDto);
  }
}
