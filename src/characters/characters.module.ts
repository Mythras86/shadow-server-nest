import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { CharSchema } from './character.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      schema: CharSchema,
      name: 'Chars'
    }]),

  ],
  providers: [CharactersService],
  controllers: [CharactersController]
})
export class CharactersModule {}
