import { Injectable, Logger } from '@nestjs/common';
import { ProviderEntity } from './entities/provider.entity';
import { AbstractRepository } from 'src/db';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProviderRepository extends AbstractRepository<ProviderEntity> {
  protected readonly logger = new Logger(ProviderRepository.name);

  constructor(
    @InjectModel(ProviderEntity.name) providerModel: Model<ProviderEntity>,
  ) {
    super(providerModel);
  }
}
