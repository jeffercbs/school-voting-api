import { MinLength, IsNotEmpty } from "class-validator";

export class SignInDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
