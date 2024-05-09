import { IsNotEmpty, IsNumber, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from "class-transformer"; 


export class AuthorDTO {
    @IsNotEmpty()
    @IsString()
    firstName: string
    
    @IsNotEmpty()
    @IsString()
    lastName: string


    @IsNotEmpty()
    @IsString()
    from: string

    @IsNotEmpty()
    birthDate: number
};


export class UpdatedAuthorDTO {
    
    @IsString()
    @IsOptional()
    firstName: string
    
    
    @IsString()
    @IsOptional()
    lastName: string


    @IsString()
    @IsOptional()
    from: string

    
    @IsOptional()
    birthDate: number
}