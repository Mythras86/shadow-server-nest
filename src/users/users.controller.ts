import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersS: UsersService) {}

    @Get()
    getAllUsers(): User[] {
        return this.usersS.getAllUsers();
    }

    @Get('/:_id')
    getOneUser(@Param('_id') _id:string): User {
        return this.usersS.getOneUser(_id);
    }

    @Post()
    createUser(@Body() userDto: UserDto): User {
        return this.usersS.createUser(userDto);
    }

    @Put('/:_id')
    updateUser(@Param('_id') _id:string): User {
        return this.usersS.updateUser(_id);
    }

    @Delete('/:_id')
    deleteUser(@Param('_id') _id:string): void {
        return this.usersS.deleteUser(_id);
    }
}
