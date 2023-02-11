import {
  IsEmail,
  IsString,
  IsStrongPassword,
  IsPhoneNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({
    //this validator checks whether the password has at least 6 characters with at least 1 number, 1 uppercase letter, and special character
    minLength: 6,
    minNumbers: 1,
    minUppercase: 1,
    minSymbols: 1,
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('BR') // checks if the phone is in the Brazilian format
  //examples: (11)90000000 ✔;
  //11 90000000 ✔;
  //90000000 ✔;
  //9000000 ☓
  cellphone?: string;
}
