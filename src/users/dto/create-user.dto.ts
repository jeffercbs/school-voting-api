import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    // Identity document legally issued by the government
    @IsNotEmpty()
    id: string;

    // Electoral code issued by the institution for each user
    @IsNotEmpty()
    ce: string;
}
