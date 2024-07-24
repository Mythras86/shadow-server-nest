import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, MongooseError } from 'mongoose';
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
            throw new InternalServerErrorException(error);
        }
    }

    async getAllChars(): Promise<Char[]> {
        const charsList = this.charModel.find().exec();
        return charsList;
    }

    async getOneChar(_id: string): Promise<Char> {
        const char = await this.charModel.findById(_id);
        return char;
    }

    async updateChar(_id: string, charDto: CharDto): Promise<Char> {
        const char = await this.charModel.findByIdAndUpdate(_id, charDto);
        return char;
    }

    async deleteChar(_id: string): Promise<void> {
        const deletedChar = await this.charModel.findByIdAndDelete(_id);
        if(!deletedChar) {
            throw new NotFoundException("Sikertelen")
        }
    }

}
