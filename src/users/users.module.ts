import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DbModule } from 'src/db';
import { UserEntity, UserSchema } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    DbModule,
    DbModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
