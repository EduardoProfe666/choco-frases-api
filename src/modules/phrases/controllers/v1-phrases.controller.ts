import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../../common/guards/roles.guard';
import PhrasesService from '../services/phrases.service';
import PhraseOutDto from '../dto/out/phrase.out.dto';
import { Role, Roles } from '../../../common/decorators/roles.decorator';
import PhraseInDto from '../dto/in/phrase.in.dto';
import PhraseUpdateInDto from '../dto/in/phrase.update.in.dto';

@Controller('v1/phrases')
@ApiTags('phrases')
export default class V1PhrasesController {
  constructor(
    private readonly phrasesService: PhrasesService,
  ) {}

  @Get('')
  @ApiOkResponse({ description: 'Ok', type: [PhraseOutDto] })
  @ApiOperation({ summary: 'Get all Phrases' })
  async getAll() {
    return this.phrasesService.getAll();
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'Ok', type: PhraseOutDto })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiOperation({ summary: 'Get a Phrase by its id' })
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.phrasesService.getById(id);
  }

  @Post('')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'Ok', type: PhraseOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({
    description:
      'Conflict (Other Phrase with Name)',
  })
  @ApiOperation({ summary: 'Create a new Phrase if does not exist' })
  async post(@Body() dto: PhraseInDto) {
    return this.phrasesService.post(dto);
  }

  @Put('/:id')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Ok' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiConflictResponse({
    description:
      'Conflict (Other phrase with Message)',
  })
  @ApiOperation({ summary: 'Update a Phrase by its id' })
  async put(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PhraseUpdateInDto,
  ) {
    return this.phrasesService.put(id, dto);
  }


  @Delete('/:id')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Ok' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiOperation({ summary: 'Delete a Phrase by its id.' })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.phrasesService.delete(id);
  }
}