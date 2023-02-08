import { MaxLength, MinLength, IsEmail, IsString, Matches } from "class-validator";

export class CreateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'Password must have at least one capital letter, one lowercase and a number'
        }  
    )
    password: string;
}
