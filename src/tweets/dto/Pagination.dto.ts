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
text?: String = '';

@IsOptional()
@IsString()
@Type(() => String)
dayOfWeek?: String = '';

@IsOptional()
@IsInt()
@Min(1)
@Type(() => Number)
month?: number = 1;

@IsOptional()
@IsInt()
@Min(1)
@Type(() => Number)
year?: number = 2021;

}