import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDoc = HydratedDocument<User>
@Schema()
export class User {
    _id: mongoose.Types.ObjectId;
    @Prop({ required: true, unique: true })
    name: string;
    @Prop({ required: true, unique: true })
    email: string;
    @Prop({ required: true })
    pass: string;
}

export const UserSchema = SchemaFactory.createForClass(User);