import {
    ConflictException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { Repository } from 'typeorm';
// dtos
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/signin-auth.dto';
// entities
import { School } from 'src/schools/entities/school.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(School)
        private schoolRepository: Repository<School>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async signin(req: SignInDto) {
        const { user: username, password } = req;
        try {
            const user = await this.userRepository.findOne({
                where: { user: username },
                select: { id: true, user: true, role: true, password: true },
            });

            if (!user) {
                throw new NotFoundException('User not found');
            } else if (!(await compare(password, user.password))) {
                throw new UnauthorizedException('Invalid credentials', {
                    cause: new Error(),
                    description: 'Invalid credentials',
                });
            }

            const payload = { id: user.id, username, role: user.role };

            return { access_token: await this.jwtService.signAsync(payload) };
        } catch (error) {
            return { message: '' };
        }
    }

    async me(id: string) {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException('User not found');
            }

            return user;
        } catch (error) {}
    }

    async signup(user: CreateUserDto, school: CreateSchoolDto) {
        try {
            const userExists = await this.userRepository.findOne({
                where: { dni: user.dni },
            });

            if (userExists) throw new ConflictException('User already exists');

            const newSchool = await this.schoolRepository.save(school);
            const newUser = await this.userRepository.create({
                ...user,
                password: await hash(user.password, 10),
                school: newSchool,
            });

            await this.userRepository.save(newUser);

            return newUser;
        } catch (error) {
            return { message: error };
        }
    }

    async refresh() {
        return { message: 'Refreshed' };
    }
}
