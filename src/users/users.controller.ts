import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Controller('api/user')
export class UsersController {
    constructor(private usersS: UsersService) {}

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.usersS.getAllUsers();
    }

    @Get('/:_id')
    getOneUser(@Param('_id') _id:string): Promise<User> {
        return this.usersS.getOneUser(_id);
    }

    @Post('/register')
    createUser(@Body() userDto: UserDto): Promise<User> {
        return this.usersS.createUser(userDto);
    }

    @Patch('/:_id')
    updateUser(
        @Param('_id') _id:string,
        @Body() userDto: UserDto,
    ): Promise<User> {
        return this.usersS.updateUser(_id, userDto);
    }

    @Delete('/:_id')
    deleteUser(@Param('_id') _id:string): Promise<void> {
        return this.usersS.deleteUser(_id);
    }
}
