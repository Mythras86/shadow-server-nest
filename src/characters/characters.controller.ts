import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharDto } from './character.dto';

@Controller('api/char')
export class CharactersController {
    
    constructor(
        private s: CharactersService,
    ) {}

    @Post('/new')
    newChar(@Body() charDto: CharDto): Promise<void> {
        return this.s.newChar(charDto);
    }

    @Get('/list')
    getAllChars() {}

    @Get(':_id')
    getOneChar() {}

    @Put(':_id')
    updateChar() {}

    @Delete(':_id')
    deleteChar(@Param('_id') _id:string): Promise<void> {
        return this.s.deleteChar(_id);
    }
}
