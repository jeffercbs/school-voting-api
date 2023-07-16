import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Role } from 'src/auth/constant';
import { RoleGuard } from 'src/auth/role.auth';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @UseGuards(new RoleGuard(Role.TEACHER))
    @Get()
    findAll() {
        return this.usersService.findAll();
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
