import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateVotingDto } from './dto/create-voting.dto';
import { VotingsService } from './votings.service';

@Controller('votings')
export class VotingsController {
    constructor(private readonly votingsService: VotingsService) {}

    @Post()
    create(@Body() createVotingDto: CreateVotingDto) {
        return this.votingsService.create(createVotingDto);
    }

    @Get()
    findAll() {
        return this.votingsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.votingsService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.votingsService.remove(+id);
    }
}
