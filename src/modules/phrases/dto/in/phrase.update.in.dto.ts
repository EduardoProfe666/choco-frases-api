import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export default class PhraseUpdateInDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  message: string;
}