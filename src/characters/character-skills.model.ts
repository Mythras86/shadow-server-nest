import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Skill {
//alap adatok
@Prop({ required: true })
nev: string;
@Prop({ required: true })
nevKieg: string;
@Prop({ required: true })
csoport: string;
@Prop({ required: true })
szint: number;
@Prop({ required: true })
kapTul: string;
@Prop({ required: false })
specs?: Spec[];
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

@Schema()
export class Spec {
//alap adatok
@Prop({ required: true })
nev: string;
@Prop({ required: true })
spec: string;
@Prop({ required: true })
szint: number;
}

export const SpecSchema = SchemaFactory.createForClass(Spec);