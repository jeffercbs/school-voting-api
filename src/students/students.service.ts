import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) {}

    create(createStudentDto: CreateStudentDto) {
        try {
            const students = this.studentRepository.create(createStudentDto);
            this.studentRepository.save(students);

            return { message: 'Student created successfully' };
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Try again in a few seconds',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause: error,
                },
            );
        }
    }

    findAll(school_id: string) {
        try {
            return this.studentRepository.find({
                where: {
                    school_id,
                },
                select: {
                    id: true,
                    first_name: true,
                    last_name: true,
                    course: true,
                },
            });
        } catch (error) {
            return { message: 'Try again in a few seconds' };
        }
    }

    findOne(id: number) {
        const student = this.studentRepository.findOne({
            where: { id },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                course: true,
                isActive: true,
            },
        });

        if (!student) {
            throw new NotFoundException("Student doesn't exist");
        }
    }

    update(id: number, updateStudentDto: UpdateStudentDto) {
        try {
            this.studentRepository.update(id, updateStudentDto);
        } catch (error) {
            return { message: 'Try again in a few seconds' };
        }
    }

    remove(id: number) {
        try {
            this.studentRepository.delete(id);

            return { message: 'Student deleted successfully' };
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Try again in a few seconds',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
                {
                    cause: error,
                },
            );
        }
    }
}
