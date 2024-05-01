import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty() @IsEmail()
    email: string;
    @IsNotEmpty()
    pass: string;
}