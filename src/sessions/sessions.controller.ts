import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session-dto';
@Controller('sessions')
export class SessionsController {
    constructor(private readonly sessionsService: SessionsService) {}

    @Post()
    create(@Body() createSessionDto: CreateSessionDto) {
        return this.sessionsService.create(createSessionDto);
    }

    @Get()
    findAll() {
        return this.sessionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.sessionsService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.sessionsService.remove(+id);
    }
}
