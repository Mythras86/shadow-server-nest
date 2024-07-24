import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Char } from './character.model';
import { CharDto } from './character.dto';

@Controller('api/char/')
export class CharactersController {
    
    constructor(
        private s: CharactersService,
    ) {}

    @Post('new')
    newChar(@Body() charDto: CharDto): Promise<void> {
        return this.s.newChar(charDto);
    }

    @Get('list')
    getAllChars(): Promise<Char[]> {
        return this.s.getAllChars();
    }

    @Get(':_id')
    getOneChar(@Param('_id') _id:string): Promise<Char> {
        return this.s.getOneChar(_id);
    }

    @Patch(':_id')
    updateChar(
        @Param('_id') _id:string,
        @Body() charDto: CharDto
    ): Promise<Char> {
        return this.s.updateChar(_id, charDto);
    }

    @Delete(':_id')
    deleteChar(@Param('_id') _id:string): Promise<void> {
        return this.s.deleteChar(_id);
    }
}
