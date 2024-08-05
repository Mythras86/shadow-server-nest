import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Item {
    
    //alap adatok
    @Prop({ required: true })
    csoport: string;
    @Prop({ required: true })
    tipus: string;
    @Prop({ required: true })
    nev: string;
    @Prop({ required: true })
    elhelyezes: string;
    @Prop({ required: true })
    leiras: string;
    
    //súly
    @Prop({ required: false })
    suly?: number;
    @Prop({ required: false })
    sulySzorzo?: number;
    
    //költségek kumulatív
    @Prop({ required: false })
    tokeKtsg?: number;
    @Prop({ required: false })
    karmaKtsg?: number;
    @Prop({ required: false })
    esszenciaKtsg?: number;
    
    //költségek per szint
    @Prop({ required: false })
    tokeKtsgPerSzint?: number;
    @Prop({ required: false })
    karmaKtsgPerSzint?: number;
    @Prop({ required: false })
    esszenciaKtsgPerSzint?: number;
    
    //költségek multiplikatív
    @Prop({ required: false })
    tokeKtsgSzorzo?: number;
    @Prop({ required: false })
    karmaKtsgSzorzo?: number;
    @Prop({ required: false })
    esszenciaKtsgSzorzo?: number;
    
    //szint és minőség
    @Prop({ required: false })
    szint?: number;
    @Prop({ required: false })
    maxSzint?: number;
    
    @Prop({ required: false })
    celszam?: number;
    @Prop({ required: false })
    celpontokSzama?: number;
    @Prop({ required: false })
    hatosugar?: number;
    
    @Prop({ required: false })
    kiegeszitoKorlatozas?: Array<nevErtek>
    @Prop({ required: false })
    kiegeszitok?: Array<Item>;
    
    @Prop({ required: false })
    tavolsag?: Array<Tavolsag>;
    
    @Prop({ required: false })
    tamadas?: Array<Tamadas>;
    
    @Prop({ required: false })
    tulajdonsagModosito?: Array<nevErtek>;
    
    //felhasználás pl.?: fegyverbe tár, szellem szolgálat, gyógyszeradag, méreg
    @Prop({ required: false })
    felhasznalasNev?: string;
    @Prop({ required: false })
    felhasznalt?: number;
    @Prop({ required: false })
    felhasznalasMax?: number;
    }
        
export const ItemSchema = SchemaFactory.createForClass(Item);

export class Tamadas {
    @Prop({ required: true })
    nev: string;
    @Prop({ required: true })
    akcio: number;
    @Prop({ required: true })
    ero: number;
    @Prop({ required: true })
    sebzes: number;
    sebKod: string;
}

export class Tavolsag {
    @Prop({ required: true })
    nev: string;
    @Prop({ required: true })
    ertek: number;
    @Prop({ required: true })
    modosito: number;
}

export class nevErtek {
    @Prop({ required: true })
    nev: string;
    @Prop({ required: true })
    ertek: number;
  }
