import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "./user.model";
import { Model } from "mongoose";
import { JwtPayLoad } from "./jwt-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor (
        @InjectModel(User.name) private userModel: Model<User>,
    ) {
        super({
            secretOrKey: 'thisisasecret111',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }
    async validate(payload: JwtPayLoad): Promise<User> {
        const {name} = payload;
        const user: User = await this.userModel.findOne({name});

        if(!user) {
            throw new UnauthorizedException();
        }
    
        return user;
    }
}