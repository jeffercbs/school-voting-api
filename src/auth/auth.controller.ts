import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
// dtos
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/signin-auth.dto';
import { Public } from './decorators/public';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    @Public()
    signIn(@Body() req: SignInDto) {
        return this.authService.signin(req);
    }

    @Post('signup')
    @Public()
    signUp(
        @Body('user') user: CreateUserDto,
        @Body('school') school: CreateSchoolDto,
    ) {
        return this.authService.signup(user, school);
    }

    @Get('me')
    me(@Body('id') id: string) {
        return this.authService.me(id);
    }

    @Post('refresh')
    @Public()
    refresh() {
        return this.authService.refresh();
    }
}
