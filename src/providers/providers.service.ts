import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProviderRepository } from './provider.repository';

@Injectable()
export class ProvidersService {
  constructor(private readonly providerRepository: ProviderRepository) {}

  async create(createProviderDto: CreateProviderDto) {
    return this.providerRepository.create({
      ...createProviderDto,
      timestamp: new Date(),
    });
  }

  findAll() {
    return this.providerRepository.find({});
  }

  findOne(_id: string) {
    return this.providerRepository.findOne({ _id: _id });
  }

  update(_id: string, updateProviderDto: UpdateProviderDto) {
    return this.providerRepository.findOneAndUpdate(
      { _id },
      { $set: updateProviderDto },
    );
  }

  remove(_id: string) {
    return this.providerRepository.findOneAndDelete({ _id });
  }
}
