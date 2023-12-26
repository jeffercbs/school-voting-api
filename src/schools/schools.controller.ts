import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public';
import { Role, Roles } from 'src/auth/decorators/roles';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolsService } from './schools.service';

@Controller('schools')
export class SchoolsController {
    constructor(private readonly schoolsService: SchoolsService) {}

    @Get()
    @Public()
    findAll() {
        return this.schoolsService.findAll();
    }

    @Get(':id')
    @Public()
    findOne(@Param('id') id: string) {
        return this.schoolsService.findOne(id);
    }

    @Patch(':id')
    @Roles(Role.Admin)
    update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
        return this.schoolsService.update(id, updateSchoolDto);
    }
}
