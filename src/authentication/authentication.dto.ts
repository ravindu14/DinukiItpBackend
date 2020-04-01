import { IsString, IsEmail, IsNumber } from "class-validator";

export class LogInDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public username: string;

  @IsString()
  public password: string;

  @IsString()
  public gender: string;

  @IsString()
  public employeeNumber: string;
}
