import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Char } from './character.model';
import { CharDto } from './character.dto';

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
            throw new InternalServerErrorException();
        }
    }

    getAllChars() {}

    getOneChar() {}

    updateChar() {}

    async deleteChar(_id: string): Promise<void> {
        const deletedChar = await this.charModel.findByIdAndDelete(_id);
        if(!deletedChar) {
            throw new NotFoundException("Sikertelen")
        }
    }

}
