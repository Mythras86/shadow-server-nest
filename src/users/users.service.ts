import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    getOneUser(_id: string): Promise<User> {
        const foundUser = this.userModel.findById(_id);

        if(!foundUser) {
            throw new NotFoundException("Nincs ilyen Felhasználó");
        }
        return foundUser;
    }

    updateUser(_id: string, userUpdate:User): Promise<User> {
        return this.userModel.findByIdAndUpdate(_id, userUpdate)
    }

    deleteUser(_id: string): Promise<void> {
        return this.userModel.findByIdAndDelete(_id);
    }
}