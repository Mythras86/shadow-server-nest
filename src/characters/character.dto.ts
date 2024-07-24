import { IsArray, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Item } from "src/items/items.model";
import { Skill } from "./character-skills.model";
import { User } from "src/users/user.model";

export class CharDto {
    @IsOptional() @IsMongoId()
    creatorId?: User;
    // szöveges
    @IsNotEmpty() @IsString()
    teljesnev: string;
    @IsNotEmpty() @IsString()
    becenev:string;
    @IsNotEmpty() @IsString()
    alnev:string;
    @IsNotEmpty() @IsString()
    testalkat:string;
    @IsNotEmpty() @IsString()
    hajstilus:string;
    
    // értékválasztó
    @IsNotEmpty() @IsString()
    nem: string;
    @IsNotEmpty() @IsString()
    dns:string;
    @IsNotEmpty() @IsString()
    anyanyelv: string;
    @IsNotEmpty() @IsNumber()
    eletkor:number;
    @IsNotEmpty() @IsNumber()
    magassag:number;
    @IsNotEmpty() @IsNumber()
    testsuly:number;
    
    // színek
    @IsNotEmpty() @IsString()
    szemszin:string;
    @IsNotEmpty() @IsString()
    hajszin:string;
    @IsNotEmpty() @IsString()
    szorszin:string;
    @IsNotEmpty() @IsString()
    borszin:string;
    @IsNotEmpty() @IsString()
    kedvencszin:string;
    
    // hosszú szöveg
    @IsNotEmpty() @IsString()
    felelem:string;
    @IsNotEmpty() @IsString()
    osztonzo:string;
    @IsNotEmpty() @IsString()
    gyulolet:string;
    @IsNotEmpty() @IsString()
    kedvenc:string;
    @IsNotEmpty() @IsString()
    irtozat:string;
    @IsNotEmpty() @IsString()
    vonzalom:string;
    @IsNotEmpty() @IsString()
    megjelenes:string;
    
    // erőforrások karma
    @IsNotEmpty() @IsNumber()
    alapKarma: number;
    @IsNotEmpty() @IsNumber()
    szerzettKarma: number;
    @IsNotEmpty() @IsNumber()
    elkoltottKarma: number;
    
    // erőforrások tőke
    @IsNotEmpty() @IsNumber()
    alapToke: number;
    @IsNotEmpty() @IsNumber()
    szerzettToke: number;
    @IsNotEmpty() @IsNumber()
    elkoltottToke: number;
    
    // fizikai
    @IsNotEmpty() @IsNumber()
    fizEro: number;
    @IsNotEmpty() @IsNumber()
    fizGyo: number;
    @IsNotEmpty() @IsNumber()
    fizUgy: number;
    @IsNotEmpty() @IsNumber()
    fizKit: number;
    
    // asztrál
    @IsNotEmpty() @IsNumber()
    asztEro: number;
    @IsNotEmpty() @IsNumber()
    asztGyo: number;
    @IsNotEmpty() @IsNumber()
    asztUgy: number;
    @IsNotEmpty() @IsNumber()
    asztKit: number;
    
    // speciális
    @IsNotEmpty() @IsNumber()
    kockatartalek: number;
    @IsNotEmpty() @IsNumber()
    magia: number;
    @IsNotEmpty() @IsNumber()
    chiAramlas: number;
    
    // konstans
    @IsNotEmpty() @IsNumber()
    esszencia: number;
    @IsNotEmpty() @IsNumber()
    reakcio: number;
    @IsNotEmpty() @IsNumber()
    kezdemenyezes: number;
    
    // állapot
    @IsNotEmpty() @IsNumber()
    asztralisAllapot: number;
    @IsNotEmpty() @IsNumber()
    fizikaiAllapot: number;
    @IsNotEmpty() @IsNumber()
    pinhentsegAllapot: number;
    @IsNotEmpty() @IsNumber()
    taplaltsagAllapot: number;
    
    // szakértelmek
    @IsOptional() @IsArray()
    activeSkills: Skill[];
    @IsOptional() @IsArray()
    knowledgeSkills: Skill[];
    @IsOptional() @IsArray()
    languageSkills: Skill[];
    
    // felszerelések
    @IsOptional() @IsArray()
    armors: Item[];
    @IsOptional() @IsArray()
    armorAddons: Item[];
    @IsOptional() @IsArray()
    weapons: Item[];
    @IsOptional() @IsArray()
    weaponAddons: Item[];
    @IsOptional() @IsArray()
    items: Item[];
    @IsOptional() @IsArray()
    cybers: Item[];
    @IsOptional() @IsArray()
    explosives: Item[];
    @IsOptional() @IsArray()
    artifacts: Item[];
    @IsOptional() @IsArray()
    spells: Item[];
    @IsOptional() @IsArray()
    spirits: Item[];
}