import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CharactersModule } from './characters/characters.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    UsersModule, 
    CharactersModule, 
    ItemsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
