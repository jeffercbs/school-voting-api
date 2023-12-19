import { IsNotEmpty } from 'class-validator';

export class CreateSchoolDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    municipality: string;
    @IsNotEmpty()
    department: string;
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    phone: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    website: string;
    @IsNotEmpty()
    description: string;
    logo: string;
    cover: string;
}
