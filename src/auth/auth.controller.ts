import { Body, Controller, Post } from '@nestjs/common';
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
    signIn(@Body() req: SignInDto) {
        return this.authService.signin(req);
    }

    @Post('user')
    @Public()
    getUser(@Body() id: string) {
        return this.authService.getUser(id);
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
