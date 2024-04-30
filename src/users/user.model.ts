import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
    @Prop({ required: false })
    _id?: string
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    pass: string;
}

export const UserSchema = SchemaFactory.createForClass(User);