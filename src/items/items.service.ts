import { Injectable } from '@nestjs/common';
import { Item } from './items.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {

    constructor(
        @InjectModel('Items') private itemModel: Model<Item>,
    ) {}

    async getAllItems(): Promise<Item[]> {
        const itemsList = this.itemModel.find().exec();
        return itemsList;
    }


}
