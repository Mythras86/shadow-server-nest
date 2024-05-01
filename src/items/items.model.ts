import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Item {
//database id
@Prop({ required: false })
_id: string;

//alap adatok
@Prop({ required: true })
kategoria: string;
@Prop({ required: true })
csoport: string;
@Prop({ required: true })
tipus: string;
@Prop({ required: true })
nev: string;

//súly
@Prop({ required: false })
suly: number;
@Prop({ required: false })
sulySzorzo: number;

//költségek kumulatív
@Prop({ required: false })
tokeKtsg: number;
@Prop({ required: false })
karmaKtsg: number;
@Prop({ required: false })
esszenciaKtsg: number;

//költségek per szint
@Prop({ required: false })
tokeKtsgPerSzint: number;
@Prop({ required: false })
karmaKtsgPerSzint: number;
@Prop({ required: false })
esszenciaKtsgPerSzint: number;

//költségek multiplikatív
@Prop({ required: false })
tokeKtsgSzorzo: number;
@Prop({ required: false })
karmaKtsgSzorzo: number;
@Prop({ required: false })
esszenciaKtsgSzorzo: number;

//szint és minőség
@Prop({ required: false })
szint: number;
@Prop({ required: false })
maxSzint: number;
@Prop({ required: false })
minoseg: string;

@Prop({ required: false })
tulajdonsagModosito: Array<any>
//- tulajdonsagKod
//- ertek

@Prop({ required: false })
celszam: number;
@Prop({ required: false })
celpontokSzama: number;
@Prop({ required: false })
hatosugar: number;
@Prop({ required: false })
hatotav: Array<any>
//- tav
//- modosito

@Prop({ required: false })
tamadas: Array<any>
//- mod
//- ero
//- sebzes
//- sebKod

//felhasználás pl.: fegyverbe tár, szellem szolgálat, gyógyszeradag, méreg
@Prop({ required: false })
felhasznalasMennyiseg: number;
@Prop({ required: false })
felhasznalasTipus: string;
@Prop({ required: false })
felhasznalasKapacitas: number;

//kiegészítők, melyek beépíthetőek
@Prop({ required: false })
kiegeszitokTipusa
@Prop({ required: false })
kiegeszitok: Array<any>
//- befogadoElem
//- csoport
//- tipus
//- kiegeszito

@Prop({ required: false })
leiras: string;
@Prop({ required: false })
megjegyzes: string;

@Prop({ required: false })
elhelyezes: string;
}

export const itemSchema = SchemaFactory.createForClass(Item);