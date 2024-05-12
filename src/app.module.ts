import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CharactersModule } from './characters/characters.module';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Mythras:Sineas8689Daneya@mydevdb.igiaj.mongodb.net/charsheet", {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
           console.log('is connected');
        });
        connection._events.connected();
        return connection;
        },
      },
    ),
    ConfigModule.forRoot(),
    UsersModule, 
    CharactersModule, 
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
