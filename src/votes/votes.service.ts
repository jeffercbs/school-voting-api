import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVoteDto } from './dto/create-vote.dto';
import { Vote } from './entities/vote.entity';

@Injectable()
export class VotesService {
    constructor(
        @InjectRepository(Vote)
        private votesRepository: Repository<Vote>,
    ) {}

    create(createVoteDto: CreateVoteDto) {
        return createVoteDto;
    }

    findAll() {
        return `This action returns all votes`;
    }

    findOne(id: number) {
        return `This action returns a #${id} vote`;
    }
}
