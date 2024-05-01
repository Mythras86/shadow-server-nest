import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import mongoose from "mongoose";

export class UserDto {
    _id: mongoose.Types.ObjectId
    @IsNotEmpty()
    name: string;
    @IsNotEmpty() @IsEmail()
    email: string;
    @IsNotEmpty()
    pass: string;
}