import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Ip,
    Post,
    Request,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private usersService: UsersService,
    ) {}

    @Post('signup')
    async signUp(@Body() user: RegisterAuthDto) {
        return this.authService.signUp(user);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signIn(@Body() user: LoginAuthDto, @Ip() ip: string) {
        return this.authService.signIn(user, ip);
    }

    @Get('profile')
    async getUser(@Request() req) {
        return await this.usersService.findUser(req.user.email);
    }
}
