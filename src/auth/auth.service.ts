import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { CreateSchoolDto } from 'src/schools/dto/create-school.dto';
import { School } from 'src/schools/entities/school.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/signin-auth.dto';

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
                select: { id: true, user: true, password: true },
            });

            if (!user) {
                throw new NotFoundException('User not found');
            } else if (!(await compare(password, user.password))) {
                throw new UnauthorizedException('Invalid credentials');
            }

            const payload = { id: user.id, username };

            return { access_token: await this.jwtService.signAsync(payload) };
        } catch (error) {
            return { message: '' };
        }
    }

    async signup(user: CreateUserDto, school: CreateSchoolDto) {
        try {
            const newSchool = await this.schoolRepository.save(school);
            const newUser = await this.userRepository.create({
                ...user,
                password: await hash(user.password, 10),
                school: newSchool,
            });

            await this.userRepository.save(newUser);

            return { message: 'The user created' };
        } catch (error) {
            return { message: error };
        }
    }

    async refresh() {
        return { message: 'Refreshed' };
    }
}
