import { IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    school_id: string;

    @IsNotEmpty()
    code: string;

    @IsNotEmpty()
    course: string;
}
