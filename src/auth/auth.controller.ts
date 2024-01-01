import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { Public } from './decorators/public';
// dtos
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/signin-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    @Public()
    signIn(@Body() req: SignInDto, @Res({ passthrough: true }) res: Response) {
        return this.authService.signin(req, res);
    }

    @Get('user')
    @Public()
    getUser(@Req() req: Request) {
        const token = req.cookies['access_token'] as string;
        return this.authService.getUser(token);
    }

    @Post('signup')
    @Public()
    signUp(
        @Body('user') user: CreateUserDto,
        @Body('school') school: CreateSchoolDto,
    ) {
        return this.authService.signup(user, school);
    }
}
