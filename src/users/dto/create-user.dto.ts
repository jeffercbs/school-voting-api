import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    bio: string;

    @IsNotEmpty()
    @Transform(({ value }) => parseInt(value))
    dni: number;

    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    password: string;
}
