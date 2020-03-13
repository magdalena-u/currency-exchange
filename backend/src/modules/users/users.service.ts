import { Injectable } from '@nestjs/common';

type User = {
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [{ email: 'magda@pl.pl', password: 'changeIt' }];
  }

  async findUser(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
