import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ItemDto {
    //alap adatok
    @IsNotEmpty() @IsString()
    csoport: string;
    @IsNotEmpty() @IsString()
    tipus: string;
    @IsNotEmpty() @IsString()
    nev: string;
    @IsNotEmpty() @IsString()
    elhelyezes: string;
    @IsNotEmpty() @IsString()
    leiras: string;
    
    //súly
    @IsNotEmpty() @IsNumber()
    suly?: number;
    @IsNotEmpty() @IsNumber()
    sulySzorzo?: number;
    
    //költségek kumulatív
    @IsOptional() @IsNumber()
    tokeKtsg?: number;
    @IsOptional() @IsNumber()
    karmaKtsg?: number;
    @IsOptional() @IsNumber()
    esszenciaKtsg?: number;
    
    //költségek per szint
    @IsOptional() @IsNumber()
    tokeKtsgPerSzint?: number;
    @IsOptional() @IsNumber()
    karmaKtsgPerSzint?: number;
    @IsOptional() @IsNumber()
    esszenciaKtsgPerSzint?: number;
    
    //költségek multiplikatív
    @IsOptional() @IsNumber()
    tokeKtsgSzorzo?: number;
    @IsOptional() @IsNumber()
    karmaKtsgSzorzo?: number;
    @IsOptional() @IsNumber()
    esszenciaKtsgSzorzo?: number;
    
    //szint és minőség
    @IsOptional() @IsNumber()
    szint?: number;
    @IsOptional() @IsNumber()
    maxSzint?: number;
    
    @IsOptional() @IsString()
    celszam?: string;
    @IsOptional() @IsNumber()
    celpontokSzama?: number;
    @IsOptional() @IsNumber()
    hatosugar?: number;
    
    @IsOptional() @IsArray()
    kiegeszitoKorlatozas?: Array<nevErtekDto>
    @IsOptional() @IsArray()
    kiegeszitok?: Array<ItemDto>;
    
    @IsOptional() @IsNumber()
    tavolsag?: number;
    
    @IsOptional() @IsString()
    tamadas?: string;
    @IsOptional() @IsNumber()
    akcio?: number;
    @IsOptional() @IsNumber()
    ero?: number;
    @IsOptional() @IsNumber()
    sebzes?: number;
    @IsOptional() @IsNumber()
    sebKod?: string;

    
    @IsOptional() @IsArray()
    tulajdonsagModosito?: Array<nevErtekDto>;
    
    //felhasználás pl.?: fegyverbe tár, szellem szolgálat, gyógyszeradag, méreg
    @IsOptional() @IsString()
    felhasznalasNev?: string;
    @IsOptional() @IsNumber()
    felhasznalt?: number;
    @IsOptional() @IsNumber()
    felhasznalasMax?: number;
}

export class nevErtekDto {
    @IsNotEmpty() @IsString()
    nev: string;
    @IsNotEmpty() @IsNumber()
    ertek: number;
  }
