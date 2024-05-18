import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Skill {
//alap adatok
@Prop({ required: true })
nev: string;
@Prop({ required: true })
csoport: string;
@Prop({ required: true })
megjegyzes: string;
@Prop({ required: true })
kapTul: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);