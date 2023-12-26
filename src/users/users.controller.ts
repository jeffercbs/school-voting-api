import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @Public()
    findAll() {
        return 'is public';
    }

    @Get('profile')
    getProfile() {
        return 'dd';
    }

    @Get(':id')
    findUser(@Param('id') id: string) {
        return this.usersService.findUser(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
