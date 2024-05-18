import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Item } from 'src/items/items.model';
import { User } from 'src/users/user.model';
import { Skill } from './skills.model';

export type CharDoc = HydratedDocument<Char>
@Schema()

export class Char {
    
    // alapadatok
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    creatorId: User;
    // szöveges
    @Prop({ required: true })
    teljesnev: string;
    @Prop({ required: true })
    becenev:string;
    @Prop({ required: true })
    alnev:string;
    @Prop({ required: true })
    testalkat:string;
    @Prop({ required: true })
    hajstilus:string;

    // értékválasztó
    @Prop({ required: true })
    nem: string;
    @Prop({ required: true })
    dns:string;
    @Prop({ required: true })
    anyanyelv: string;
    @Prop({ required: true })
    eletkor:number;
    @Prop({ required: true })
    magassag:number;
    @Prop({ required: true })
    testsuly:number;

    // színek
    @Prop({ required: true })
    szemszin:string;
    @Prop({ required: true })
    hajszin:string;
    @Prop({ required: true })
    szorszin:string;
    @Prop({ required: true })
    borszin:string;
    @Prop({ required: true })
    kedvencszin:string;

    // hosszú szöveg
    @Prop({ required: true })
    felelem:string;
    @Prop({ required: true })
    osztonzo:string;
    @Prop({ required: true })
    gyulolet:string;
    @Prop({ required: true })
    kedvenc:string;
    @Prop({ required: true })
    irtozat:string;
    @Prop({ required: true })
    vonzalom:string;
    @Prop({ required: true })
    megjelenes:string;

    // erőforrások karma
    @Prop({ required: true })
    alapKarma: number;
    @Prop({ required: true })
    szerzettKarma: number;
    @Prop({ required: true })
    elkoltottKarma: number;
    
    // erőforrások tőke
    @Prop({ required: true })
    alapToke: number;
    @Prop({ required: true })
    szerzettToke: number;
    @Prop({ required: true })
    elkoltottToke: number;

    // fizikai
    @Prop({ required: true })
    fizEro: number;
    @Prop({ required: true })
    fizGyo: number;
    @Prop({ required: true })
    fizUgy: number;
    @Prop({ required: true })
    fizKit: number;

    // asztrál
    @Prop({ required: true })
    asztEro: number;
    @Prop({ required: true })
    asztGyo: number;
    @Prop({ required: true })
    asztUgy: number;
    @Prop({ required: true })
    asztKit: number;
    
    // speciális
    @Prop({ required: true })
    kockatartalek: number;
    @Prop({ required: true })
    magia: number;
    @Prop({ required: true })
    chi: number;
    @Prop({ required: true })
    cyberCapacity: number;

    // konstans
    @Prop({ required: true })
    esszencia: number;
  
    // állapot
    @Prop({ required: true })
    asztralisAllapot: number;
    @Prop({ required: true })
    fizikaiAllapot: number;
    @Prop({ required: true })
    pinhentsegAllapot: number;
    @Prop({ required: true })
    taplaltsagAllapot: number;

    // szakértelmek
    @Prop({ required: false })
    skills: Array<Skill>;
    
    // felszerelések
    @Prop({ required: false })
    items: Array<Item>
}

export const CharSchema = SchemaFactory.createForClass(Char); 