import { IsNotEmpty, IsNumber, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from "class-transformer"; 

export class BookDTO {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    genre: string;

    @IsNotEmpty()
    @IsString()
    publisher: string;

    @IsNotEmpty()
    @IsNumber()
    isbn: number;
};


export class UpdatedBookDTO {

    @IsString()
    @IsOptional()
    title: string;

    
    @IsString()
    @IsOptional()
    description: string;

    
    @IsString()
    @IsOptional()
    genre: string;

    
    @IsString()
    @IsOptional()
    publisher: string;


    @IsOptional()
    @IsNumber()
    isbn: number;
}