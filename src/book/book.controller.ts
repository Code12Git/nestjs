import { Body, Controller, Req, Delete, Get, Param, Patch, Post, Query, ParseIntPipe,UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from 'src/books/dto/create-book.dto';
import { UpdateBookDto } from 'src/books/dto/update-book.dto';
import { GetBookFilterDto } from 'src/books/dto/get-book-filter.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/auth/entities/user.entity';


@UseGuards(AuthGuard)
@Roles(Role.Viewer)
@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) { }

  @Get()
  findAll(
    @Query() filterDto: GetBookFilterDto) {
    return this.bookService.findBooks(filterDto)
  }

  @Post()
  @Roles(Role.Admin)
  create(@Body() body: CreateBookDto) {
    return this.bookService.createBook(body);
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.bookService.findBookById(id)
  }

  @Patch(':id')
  @Roles(Role.Admin)
  update(@Param('id') id: number, @Body() body: UpdateBookDto) {
    const book = this.bookService.updateBook(+id, body);
    return book;
  }

  @Delete(':id')
  @Roles(Role.Admin)
  delete(@Param('id') id: string) {
    return this.bookService.deleteBook(+id)
  }

}

