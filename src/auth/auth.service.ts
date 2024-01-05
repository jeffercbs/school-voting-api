import {
    ConflictException,
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
    // Constructor that injects repositories and JWT service
    constructor(
        @InjectRepository(School)
        private schoolRepository: Repository<School>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    // Method for user sign-in
    async signin(req: SignInDto): Promise<any> {
        const { username, password } = req;
        const user = await this.userRepository.findOne({
            where: { username },
            select: { id: true, username: true, role: true, password: true },
        });

        if (!user) {
            throw new NotFoundException('User not found');
        } else if (!(await compare(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return await this.jwtService.signAsync({
            id: user.id,
            role: user.role,
            username,
        });
    }

    // Method to get user information from a token
    async getUser(id: string) {
        if (!id) {
            throw new UnauthorizedException('You are not logged in');
        }
        const user = await this.userRepository.findOne({
            where: { id },
        });

        return user;
    }

    // Method for user registration
    async signup(user: CreateUserDto, school: CreateSchoolDto) {
        // Check if the user already exists
        const userExists = await this.userRepository.findOne({
            where: { dni: user.dni },
        });

        if (userExists) throw new ConflictException('User already exists');

        // Create a new school and a new user with encrypted password
        const newSchool = await this.schoolRepository.save(school);
        const newUser = await this.userRepository.create({
            ...user,
            password: await hash(user.password, 10),
            school: newSchool,
        });

        // Save the new user to the database
        await this.userRepository.save(newUser);

        return newUser;
    }
}
