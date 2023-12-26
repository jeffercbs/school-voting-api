import { Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';

@Injectable()
export class CertificateService {
    create(createCertificateDto: CreateCertificateDto) {
        return createCertificateDto;
    }

    findOne(id: number) {
        return `This action returns a #${id} certificate`;
    }

    remove(id: number) {
        return `This action removes a #${id} certificate`;
    }
}
