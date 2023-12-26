import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    @Transform(({ value }) => parseInt(value))
    dni: number;

    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    password: string;
}
