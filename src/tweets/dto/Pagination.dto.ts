import { IsOptional, IsInt, Min, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  limit?: number = 25;

  @IsOptional()
  @IsString()
  @Type(() => String)
  tweet?: string = '';

  @IsOptional()
  @IsString()
  @Type(() => String)
  day_of_week?: string = '';

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  month?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  year?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  sentiment?: number;
}
