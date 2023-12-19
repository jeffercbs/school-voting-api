import { Body, Controller, Post } from '@nestjs/common';
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    signIn(@Body() req: SignInDto) {
        return this.authService.signin(req);
    }

    @Post('signup')
    signUp(
        @Body('user') user: CreateUserDto,
        @Body('school') school: CreateSchoolDto,
    ) {
        return this.authService.signup(user, school);
    }

    @Post('refresh')
    refresh() {
        return this.authService.refresh();
    }
}
