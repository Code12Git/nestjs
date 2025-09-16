import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './entity/book-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])], // 👈 Register Book entity repository
  controllers: [BookController],
  providers: [BookService],
  exports: [TypeOrmModule], // 👈 if other modules need BookRepository
})
export class BookModule {}
