import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString, IsInt } from 'class-validator';
import { Language } from "src/books/entities/books.entity";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  
  @IsInt()
  authorId: number;

  @IsDateString()
  publicationDate: string;

  @IsNumber()
  numberOfPages: number;

  @IsEnum(Language)
  language: Language;
}