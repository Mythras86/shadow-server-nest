import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    createUser(userDto: UserDto): User {

        const {name, email, pass} = userDto;
        
        const user: User = {
            name,
            email,
            pass
        };
        return user;
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getOneUser(_id: string):User {
        return this.users.find((user) => user._id === _id)
    }

    updateUser(_id: string):User {
        return this.users.find((user) => user._id === _id) //placeholder
    }

    deleteUser(_id: string): void {
        this.users = this.users.filter((user) => user._id === _id);
    }
}