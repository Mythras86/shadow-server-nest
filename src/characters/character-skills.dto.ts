import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class SkillDto {
    @IsNotEmpty() @IsString()
    nev: string;
    @IsNotEmpty() @IsString()
    nevKieg:string;
    @IsNotEmpty() @IsString()
    csoport:string;
    @IsNotEmpty() @IsNumber()
    szint:number;
    @IsNotEmpty() @IsString()
    kapTul:string;
    @IsOptional() @IsArray()
    specs?:SpecDto[];
}

export class SpecDto {
    @IsNotEmpty() @IsString()
    nev: string;
    @IsNotEmpty() @IsString()
    spec:string;
    @IsNotEmpty() @IsNumber()
    szint:number;
}