import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { College } from 'src/colleges/entities/college.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(College)
        private readonly collegeRepository: Repository<College>,
    ) {}

    async createUser(u: CreateUserDto) {
        const collegeFound = await this.collegeRepository.findOne({
            where: { id: u.collegeId },
        });
        const userFound = await this.userRepository.findOne({
            where: { id: u.id },
        });

        if (userFound) {
            throw new ConflictException('User already exists');
        }

        if (!collegeFound) {
            throw new NotFoundException('College not found');
        }

        const user = this.userRepository.create({
            ...u,
            college: collegeFound,
        });

        return await this.userRepository.save(user);
    }

    findAll(b: SearchUserDto) {
        if (b.collegeId === undefined) {
            throw new NotFoundException('CollegeId not found');
        }

        return this.userRepository.find({
            where: { collegeId: b.collegeId },
        });
    }

    findUser(id: number) {
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
