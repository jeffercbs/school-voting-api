import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async createUser(user: CreateUserDto) {
        const userFound = await this.usersRepository.findOne({
            where: { id: user.id },
        });

        if (userFound) {
            throw new ConflictException('User already exists');
        }
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }

    findAll() {
        return `This action returns all users`;
    }

    findUser(id: string) {
        const user = this.usersRepository.findOne({ where: { id } });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
