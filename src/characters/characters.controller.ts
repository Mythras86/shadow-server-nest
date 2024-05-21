import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharDto } from './character.dto';
import { Char } from './character.model';

@Controller('api/char')
export class CharactersController {
    
    constructor(
        private s: CharactersService,
    ) {}

    @Post('/new')
    newChar(@Body() charDto: any): Promise<void> {
        return this.s.newChar(charDto);
    }

    @Get('/list')
    getAllChars(): Promise<Char[]> {
        return this.s.getAllChars();
    }

    @Get('/:_id')
    getOneChar(@Param('_id') _id:string): Promise<Char> {
        return this.s.getOneChar(_id);
    }

    @Put('/:_id')
    updateChar(@Param('_id') _id:string): Promise<Char> {
        return this.s.updateChar(_id);
    }

    @Delete('/:_id')
    deleteChar(@Param('_id') _id:string): Promise<void> {
        return this.s.deleteChar(_id);
    }
}
