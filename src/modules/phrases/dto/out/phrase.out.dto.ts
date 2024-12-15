import { ApiProperty } from '@nestjs/swagger';

export default class PhraseOutDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  message: string;
}