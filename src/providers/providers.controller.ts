import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get('new')
  @Render('providers/new')
  createProviderForm() {
    return {};
  }

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }

  @Get('index')
  @Render('providers/index')
  async findAll() {
    return { providers: await this.providersService.findAll() };
  }

  @Get(':id')
  @Render('providers/show')
  async findOne(@Param('id') id: string) {
    return {
      provider: await this.providersService.findOne(id),
    };
  }

  @Get('edit/:id')
  @Render('providers/edit')
  async editForm(@Param('id') id: string) {
    return {
      provider: await this.providersService.findOne(id),
    };
  }

  // TODO: Use only patch here. Find out the issue here
  @Post(':id')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProviderDto: UpdateProviderDto,
    @Res() res: Response,
  ) {
    this.providersService.update(id, updateProviderDto);
    return res.redirect(303, `/providers/${id}`);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providersService.remove(id);
  }
}
