import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { VotingsService } from './votings.service';
import { CreateVotingDto } from './dto/create-voting.dto';
import { UpdateVotingDto } from './dto/update-voting.dto';

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

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateVotingDto: UpdateVotingDto) {
        return this.votingsService.update(+id, updateVotingDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.votingsService.remove(+id);
    }
}
