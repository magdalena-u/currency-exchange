import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './models/user.model';
import { Account } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Account)
    private readonly userRepo: Repository<Account>,
  ) {}

  async findUser(email: string): Promise<User | undefined> {
    try {
      const user = this.userRepo.findOne(email);
      return user;
    } catch {
      throw new NotAcceptableException('User not exist');
    }
  }
}
