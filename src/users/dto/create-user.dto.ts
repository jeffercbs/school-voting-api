import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateUserDto {
    @IsNumberString()
    @Transform(({ value }) => parseInt(value))
    id: number;
    @IsNotEmpty()
    code: string;
    @IsNotEmpty()
    collegeId: string;
}
