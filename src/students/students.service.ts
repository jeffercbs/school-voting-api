import { Injectable, NotFoundException } from '@nestjs/common';
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
            const student = this.studentRepository.create(createStudentDto);
            return this.studentRepository.save(student);
        } catch (error) {
            return { message: 'Try again in a few seconds' };
        }
    }

    findAll() {
        try {
            return this.studentRepository.find({
                select: {
                    id: true,
                    course: true,
                },
            });
        } catch (error) {
            return { message: 'Try again in a few seconds' };
        }
    }

    findOne(id: number) {
        try {
            const student = this.studentRepository.findOne({
                where: { id },
                select: { id: true, course: true },
            });

            if (!student) {
                throw new NotFoundException("Student doesn't exist");
            }

            return student;
        } catch (error) {
            return { message: 'Try again in a few seconds' };
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
            return { message: 'Try again in a few seconds' };
        }
    }
}
