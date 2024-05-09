import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookCreationProps } from 'src/interface/interfaces';
import { BookService } from './book.service';
import { BookDTO, UpdatedBookDTO } from './dto/book_dto';

@Controller('book')
export class BookController {
        constructor(private readonly bookService: BookService) { }

    @Get()
    async listBook() {
        const book = await this.bookService.readBook();

        return book;
    };

    @Post()
    async createBook(@Body() requestBody: BookDTO) {

        const bookCreationProps: BookCreationProps = {
        title: requestBody.title,
        description: requestBody.description,
        genre: requestBody.genre,
        publisher: requestBody.publisher,
        isbn: requestBody.isbn
        };

        const book = await this.bookService.createBook(bookCreationProps);

        return { message: `Book was created: ${book.id}.` }
    };

    @Get(':id')
    async getbookById(@Param('id') id: string) {

        const BookById = await this.bookService.getBookById(id)

        return BookById;
    };

    @Delete(':id')
    async deleteBook(@Param('id') id: string) {

        await this.bookService.deleteBook(id)

        return { message: "Delete success" };
    };


    @Put()
    async updateBook(@Param('id') id: string, @Body() requestBody: UpdatedBookDTO) {
        const updatedBook = await this.bookService.updateBook(id, requestBody);

        return updatedBook;
    };
}
