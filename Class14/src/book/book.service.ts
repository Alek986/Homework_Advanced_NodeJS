import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookCreationProps, BookInterface, UpdateAuthorProps, UpdateBookProps } from 'src/interface/interfaces';
import { BookORMEntity } from './entity/book_entity';

@Injectable()
export class BookService {
    constructor (@InjectRepository(BookORMEntity)
private bookRepository: Repository<BookORMEntity>){}

async readBook(){
    const book = await this.bookRepository.find({relations:['author']});

    return book
};

async createBook(bookCreationProps: BookCreationProps){

    const book: BookInterface = {
        title: bookCreationProps.title,
        description: bookCreationProps.description,
        genre: bookCreationProps.genre,
        publisher: bookCreationProps.publisher,
        isbn: bookCreationProps.isbn
     };
    

    const bookEntity = this.bookRepository.create(book);
    await this.bookRepository.save(bookEntity);

    return bookEntity;
};


async getBookById (id: string){

    const book = await this.bookRepository.findOne({where:{id:id}, relations: ['author']});

    if(!book){
        throw new NotFoundException (`Book with ${book.id} was not found.`);
    };
};

async deleteBook(id:string){
    const deleteBook = await this.bookRepository.delete(id);

    if(!deleteBook.affected){
        throw new NotFoundException ("Book was not found.");
    };
};

async updateBook(id:string, updateBookProps: UpdateBookProps){
    const updateBook = await this.bookRepository.update(id,updateBookProps);

    if(!updateBook.affected){
        throw new NotFoundException('Book was not found.')
    };
};
}
