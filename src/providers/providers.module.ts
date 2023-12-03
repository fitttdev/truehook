import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { ProviderRepository } from './provider.repository';
import { DbModule } from 'src/db';
import { ProviderEntity, ProviderSchema } from './entities/provider.entity';

@Module({
  imports: [
    DbModule,
    DbModule.forFeature([
      { name: ProviderEntity.name, schema: ProviderSchema },
    ]),
  ],
  controllers: [ProvidersController],
  providers: [ProvidersService, ProviderRepository],
})
export class ProvidersModule {}
