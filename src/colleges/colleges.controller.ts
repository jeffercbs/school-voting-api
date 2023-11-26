import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { CollegesService } from './colleges.service';
import { CreateCollegeDto } from './dto/create-college.dto';

@Controller('colleges')
export class CollegesController {
    constructor(private readonly collegesService: CollegesService) {}

    @Post()
    create(@Body() createCollegeDto: CreateCollegeDto) {
        return this.collegesService.create(createCollegeDto);
    }

    @Get()
    findAll() {
        return this.collegesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.collegesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string) {
        return this.collegesService.update(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.collegesService.remove(+id);
    }
}
