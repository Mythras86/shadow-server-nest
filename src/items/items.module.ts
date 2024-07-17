import { Module } from '@nestjs/common';
import { ItemSchema } from './items.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            schema: ItemSchema,
            name: 'Items'
        }]),
        ],
        providers: [ItemsService],
        controllers: [ItemsController]
    })
export class ItemsModule {}
