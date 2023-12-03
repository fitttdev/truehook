import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/db';

@Schema({ versionKey: false, collection: 'providers' })
export class ProviderEntity extends AbstractDocument {
  @Prop()
  timestamp: Date;
  @Prop()
  identifier: string;
}

export const ProviderSchema = SchemaFactory.createForClass(ProviderEntity);
