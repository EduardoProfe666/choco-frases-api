import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import PgService from '../../database/services/pg.service';
import PhraseOutDto from '../dto/out/phrase.out.dto';
import PhraseUpdateInDto from '../dto/in/phrase.update.in.dto';
import PhraseInDto from '../dto/in/phrase.in.dto';
import Phrase from '../../database/entities/phrase.entity';

@Injectable()
export default class PhrasesService {
  private readonly logger = new Logger(PhrasesService.name);

  constructor(
    private readonly pgService: PgService,
  ) {
  }

  public async getAll(): Promise<PhraseOutDto[]> {
    const phrases = await this.pgService.phrases.find({});

    return phrases.map((phrase) => this.toOutDto(phrase));
  }

  public async getById(id: number): Promise<PhraseOutDto> {
    const phrase = await this.pgService.phrases.findOne({
      where: { id },
    });
    if (!phrase) {
      throw new NotFoundException(`Phrase with ID ${id} not found`);
    }
    return this.toOutDto(phrase);
  }

  public async post(dto: PhraseInDto): Promise<PhraseOutDto> {
    const normalizedMessage = dto.message.trim();

    const existingPhraseByMessage = await this.pgService.phrases.findOne({
      where: { message: normalizedMessage },
    });
    if(existingPhraseByMessage) {
      throw new ConflictException(`Phrase with message ${normalizedMessage} already exists`);
    }

    const newPhrase = this.pgService.phrases.create({
      message: normalizedMessage,
    });
    await this.pgService.phrases.save(newPhrase);

    this.logger.log(`Created new phrase with ID ${newPhrase.id}`);

    return this.toOutDto(newPhrase);
  }

  public async put(id: number, dto: PhraseUpdateInDto): Promise<void> {
    const normalizedMessage = dto.message.trim();

    const existingPhraseByMessage = await this.pgService.phrases.findOne({
      where: { message: normalizedMessage },
    });
    if(existingPhraseByMessage) {
      throw new ConflictException(`Phrase with message ${normalizedMessage} already exists`);
    }

    const phrase = await this.pgService.phrases.findOne({
      where: { id },
    });
    if(!phrase) {
      throw new NotFoundException(`Phrase with ID ${id} not found`);
    }

    phrase.message = normalizedMessage;

    await this.pgService.phrases.save(phrase);
    this.logger.log(`Updated phrase with ID ${id}`);
    this.logger.log({ normalizedMessage });
  }

  public async delete(id: number): Promise<void> {
    const result = await this.pgService.phrases.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Phrase with ID ${id} not found`);
    }
    this.logger.log(`Deleted Phrase with ID ${id}`);
  }

  private toOutDto(phrase: Phrase): PhraseOutDto {
    return {
      id: phrase.id,
      message: phrase.message,
    };
  }
}