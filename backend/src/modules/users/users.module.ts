import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './users.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Account])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
