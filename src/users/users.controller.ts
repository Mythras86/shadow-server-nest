import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Controller('api/user')
export class UsersController {
    constructor(private usersS: UsersService) {}

    @Post('/register')
    userRegister(@Body() userDto: UserDto): Promise<void> {
        return this.usersS.userRegister(userDto);
    }

    @Post('/login')
    userLogin(@Body() userDto: UserDto): Promise<{ token: string}> {
        return this.usersS.userLogin(userDto);
    }

    // @Patch('/:_id')
    // userUpdate(
    //     @Param('_id') _id:string,
    //     @Body() userDto: UserDto,
    // ): Promise<User> {
    //     return this.usersS.userUpdate(_id, userDto);
    // }

    @Delete('/:_id')
    deleteUser(@Param('_id') _id:string): Promise<void> {
        return this.usersS.deleteUser(_id);
    }
}
