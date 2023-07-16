import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
    ) {}
    signIn(user: LoginAuthDto, ip: string) {
        const pyload = { ...user, ip };
        return {
            access_token: this.jwtService.sign(pyload),
        };
    }

    async signUp(user: RegisterAuthDto) {
        const newUser = await this.usersService.createUser(user);

        return newUser;
    }

    async validate(id: string, ce: string): Promise<any> {
        const user = await this.usersService.findUser(id);

        if (user.ce !== ce) throw new UnauthorizedException();
        return user;
    }
}
