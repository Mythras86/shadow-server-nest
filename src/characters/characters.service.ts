import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Char } from './character.model';
import { CharDto } from './character.dto';
import { User } from 'src/users/user.model';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CharactersService {

    constructor(
        @InjectModel('Chars') private charModel: Model<Char>,
    ) {}

    async newChar(charDto: CharDto): Promise<void> {
        const newChar = new this.charModel(charDto);
        try {
            await newChar.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async getAllChars(): Promise<Char[]> {
        const charsList = this.charModel.find().exec();
        return charsList;
    }

    async getOneChar(_id: string): Promise<Char> {
        const char = await this.charModel.findById(_id);
        if(!char) {
            throw new NotFoundException(404);
        }
        return char;
    }

    async updateChar(_id: string, charDto: CharDto): Promise<Char> {
        const char = await this.charModel.findByIdAndUpdate(_id, charDto);
        if(!char) {
            throw new NotFoundException("Nincs ilyen karatker, sikertelen frissítés")
        }
        return char;
    }

    async deleteChar(_id: string): Promise<void> {
        const deletedChar = await this.charModel.findByIdAndDelete(_id);
        if(!deletedChar) {
            throw new NotFoundException("Nincs ilyen karatker, sikertelen törlés")
        }
    }

}
