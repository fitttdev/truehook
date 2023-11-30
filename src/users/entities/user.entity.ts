import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/db';

@Schema({ versionKey: false, collection: 'users' })
export class UserEntity extends AbstractDocument {
  @Prop()
  timestamp: Date;
  @Prop()
  email: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
