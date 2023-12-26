import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';

@Controller('certificate')
export class CertificateController {
    constructor(private readonly certificateService: CertificateService) {}

    @Post()
    create(@Body() createCertificateDto: CreateCertificateDto) {
        return this.certificateService.create(createCertificateDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.certificateService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.certificateService.remove(+id);
    }
}
