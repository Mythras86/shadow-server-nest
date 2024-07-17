import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';

@Controller('api/items/')
export class ItemsController {
    constructor(
        private s: ItemsService,
    ) {}

    @Get('list')
    getAllItems(): Promise<Item[]> {
        return this.s.getAllItems();
    }

}
