import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import AuthService from '../services/auth.service';
import { AuthOutDto } from '../dto/out/auth.out.dto';
import LoginInDto from '../dto/in/login.in.dto';

@Controller('v1/auth')
@ApiTags('auth')
export default class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @ApiCreatedResponse({ description: 'Login Successful', type: AuthOutDto })
  @ApiForbiddenResponse({ description: 'Invalid Credentials' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiOperation({ summary: 'Authenticate into System' })
  async login(@Body() body: LoginInDto): Promise<AuthOutDto> {
    const accessToken = await this.authService.login(
      body.email,
      body.password,
    );
    return {
      accessToken: accessToken,
    };
  }
}
