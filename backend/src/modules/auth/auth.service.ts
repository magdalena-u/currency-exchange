import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { UsersService } from '../users/users.service';
import { LoginUserDto, RegisterUserDto } from './dto/loginUser.dto';
import { JwtToken } from './models/jwtToken.model';
import { Account } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Account)
    private readonly userRepo: Repository<Account>,
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

  async register(registerData: RegisterUserDto) {
    const { email } = registerData;

    const checkIfEmailExist = await this.userRepo.findOne({ email });

    if (checkIfEmailExist) {
      throw new NotAcceptableException('Email is already use');
    }

    const newUser = this.userRepo.create({
      ...registerData,
    });

    await this.userRepo.save(newUser);
  }
}
