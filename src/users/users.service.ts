import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from 'src/schools/entities/school.entity';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(School)
        private readonly schoolRepository: Repository<School>,
    ) {}

    findUser(id: string) {
        const user = this.userRepository.findOne({ where: { id } });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
