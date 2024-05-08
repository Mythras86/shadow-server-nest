import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import mongoose from "mongoose";

export class UserDto {
    @IsOptional()
    _id: mongoose.Types.ObjectId
    @IsNotEmpty() @IsString()
    name: string;
    @IsNotEmpty() @IsEmail()
    email: string;
    @IsNotEmpty() @IsString()
    pass: string;
}