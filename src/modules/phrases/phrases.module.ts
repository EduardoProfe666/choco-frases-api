import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import AuthModule from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import V1PhrasesController from './controllers/v1-phrases.controller';
import PhrasesService from './services/phrases.service';


@Module({
  imports: [AuthModule, ConfigModule, DatabaseModule],
  controllers: [V1PhrasesController],
  providers: [PhrasesService],
  exports: [PhrasesService],
})
export default class PhrasesModule {}