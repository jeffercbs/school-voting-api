import { IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    code: string;

    @IsNotEmpty()
    course: string;
}
