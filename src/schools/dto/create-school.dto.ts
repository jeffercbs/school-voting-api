import { IsNotEmpty } from 'class-validator';

export class CreateSchoolDto {
    @IsNotEmpty()
    institute: string;
    @IsNotEmpty()
    municipality: string;
    @IsNotEmpty()
    department: string;
    @IsNotEmpty()
    address: string;
}
