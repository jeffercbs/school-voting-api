import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollegeDto } from './dto/create-college.dto';
import { College } from './entities/college.entity';

@Injectable()
export class CollegesService {
    constructor(
        @InjectRepository(College)
        private readonly collegeRepository: Repository<College>,
    ) {}

    create(createCollegeDto: CreateCollegeDto) {
        const college = this.collegeRepository.create(createCollegeDto);
        return this.collegeRepository.save(college);
    }

    findAll() {
        return this.collegeRepository.find();
    }

    findOne(id: string) {
        return this.collegeRepository.findOne({
            where: { id },
        });
    }

    update(id: number) {
        return `This action updates a #${id} college`;
    }

    remove(id: number) {
        return `This action removes a #${id} college`;
    }
}
