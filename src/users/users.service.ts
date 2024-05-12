import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('Users') private userModel: Model<User>,
        private jwtS: JwtService,
    ) {}

    async userRegister(userDto: UserDto): Promise<void> {
        const createdUser = new this.userModel(userDto);

        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(createdUser.pass, salt)
        createdUser.pass = hashedPass;

        try {
            await createdUser.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Felhasználónév, vagy Email cím már létezik!');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async userLogin(userDto: UserDto): Promise<any> {
        const { email, pass} = userDto;
        const user = await this.userModel.findOne({email});
        if(user && (await bcrypt.compare(pass, user.pass))) {
            const payload = {email}; 
            const token: string = await this.jwtS.sign(payload);
            return {
                token: token, 
                expiresIn: 10800,
                _id: user._id,
                name: user.name,
            };
        } else {
            throw new UnauthorizedException('Hibás belépési adatok!')
        }
    }

    async userUpdate(_id: string, userUpdate:User): Promise<User> {
        const updatedUser  = await this.userModel.findByIdAndUpdate(_id, userUpdate);
        if(!updatedUser) {
            throw new NotFoundException("Frissítés sikertelen, nincs ilyen ID: "+_id);
        }

        return updatedUser;
    }

    async deleteUser(_id: string): Promise<void> {
        const deletedUser = await this.userModel.findByIdAndDelete(_id);
        if(!deletedUser) {
            throw new NotFoundException("Törlés sikertelen, nincs ilyen ID: "+_id);
        }
        console.log(deletedUser);
    }
}