import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export default class PhraseUpdateInDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  message: string;
}