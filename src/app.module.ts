import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DbModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
