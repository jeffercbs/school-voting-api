import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, Roles } from 'src/auth/decorators/roles';
import { Repository } from 'typeorm';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School } from './entities/school.entity';

@Injectable()
export class SchoolsService {
    constructor(
        @InjectRepository(School)
        private schoolRepository: Repository<School>,
    ) {}

    findAll() {
        return this.schoolRepository.find({
            select: {
                id: true,
                institute: true,
                description: true,
                logo: true,
                municipality: true,
                department: true,
            },
        });
    }

    findOne(id: string) {
        return this.schoolRepository.findOne({ where: { id }, cache: true });
    }

    @Roles(Role.Admin)
    update(id: string, updateSchoolDto: UpdateSchoolDto) {
        return this.schoolRepository.update(id, updateSchoolDto);
    }
}
