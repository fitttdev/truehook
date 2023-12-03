import { IsString } from 'class-validator';

export class CreateProviderDto {
  @IsString()
  identifier: string;
}
