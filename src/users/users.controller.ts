import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUserDto } from './dto/search-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    createUsers(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

    @Get()
    findAll(@Body() b: SearchUserDto) {
        return this.usersService.findAll(b);
    }

    @Get(':id')
    findUser(@Param('id') id: number) {
        return this.usersService.findUser(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
