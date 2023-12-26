import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { VotesService } from './votes.service';

@Controller('votes')
export class VotesController {
    constructor(private readonly votesService: VotesService) {}

    @Post()
    create(@Body() createVoteDto: CreateVoteDto) {
        return this.votesService.create(createVoteDto);
    }

    @Get()
    findAll() {
        return this.votesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.votesService.findOne(+id);
    }
}
