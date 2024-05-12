import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
  ],
  providers: [CharactersService],
  controllers: [CharactersController]
})
export class CharactersModule {}
