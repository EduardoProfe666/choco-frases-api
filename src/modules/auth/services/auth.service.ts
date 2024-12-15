import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../../../common/decorators/roles.decorator';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(email: string, password: string) {
    const adminEmail = this.configService.get('ADMIN_EMAIL');
    const adminPassword = this.configService.get('ADMIN_PASSWORD');

    if(email !== adminEmail && adminPassword !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      userId: 0,
      role: Role.Admin,
    };

    const accessToken = this.jwtService.sign(payload);


    this.logger.log(`Authenticated User ${0}`);

    return accessToken;
  }
}
