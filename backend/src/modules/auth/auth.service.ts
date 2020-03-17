import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/loginUser.dto';
import { JwtToken } from './models/jwtToken.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    return await this.usersService.findUser(email);
  }

  async login(loginData: LoginUserDto): Promise<JwtToken> {
    const user = await this.usersService.findUser(loginData.email);

    if (user && user.password !== loginData.password) {
      throw new NotAcceptableException('Incorrect credentials');
    }

    const accessToken = this.jwtService.sign({ id: user.id });

    return { accessToken };
  }
}
