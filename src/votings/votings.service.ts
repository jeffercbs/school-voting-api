import { Injectable } from '@nestjs/common';
import { CreateVotingDto } from './dto/create-voting.dto';

@Injectable()
export class VotingsService {
    create(createVotingDto: CreateVotingDto) {
        return 'This action adds a new voting';
    }

    findAll() {
        return `This action returns all votings`;
    }

    findOne(id: number) {
        return `This action returns a #${id} voting`;
    }

    remove(id: number) {
        return `This action removes a #${id} voting`;
    }
}
