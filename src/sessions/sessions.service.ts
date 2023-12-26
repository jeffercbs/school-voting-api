import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './entities/session.entity';
@Injectable()
export class SessionsService {
    constructor(
        @InjectRepository(Session)
        private sessionsRepository: Repository<Session>,
    ) {}

    create(createSessionDto: CreateSessionDto) {
        return 'This action adds a new session';
    }

    findAll() {
        return `This action returns all sessions`;
    }

    findOne(id: number) {
        return `This action returns a #${id} session`;
    }

    remove(id: number) {
        return `This action removes a #${id} session`;
    }
}
