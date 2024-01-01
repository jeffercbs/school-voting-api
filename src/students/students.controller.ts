import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { Role, Roles } from 'src/auth/decorators/roles';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    @Roles(Role.Admin)
    findAll(@Body('school_id') school_id: string) {
        return this.studentsService.findAll(school_id);
    }

    @Post()
    @Roles(Role.Admin)
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentsService.create(createStudentDto);
    }

    @Get(':id')
    @Roles(Role.Student, Role.Admin)
    findOne(@Param('id') id: number) {
        return this.studentsService.findOne(id);
    }

    @Patch(':id')
    @Roles(Role.Admin)
    update(
        @Param('id') id: string,
        @Body() updateStudentDto: UpdateStudentDto,
    ) {
        return this.studentsService.update(+id, updateStudentDto);
    }

    @Delete(':id')
    @Roles(Role.Admin)
    remove(@Param('id') id: string) {
        return this.studentsService.remove(+id);
    }
}
