"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("./entity/book_entity");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async readBook() {
        const book = await this.bookRepository.find({ relations: ['author'] });
        return book;
    }
    ;
    async createBook(bookCreationProps) {
        const book = {
            title: bookCreationProps.title,
            description: bookCreationProps.description,
            genre: bookCreationProps.genre,
            publisher: bookCreationProps.publisher,
            isbn: bookCreationProps.isbn
        };
        const bookEntity = this.bookRepository.create(book);
        await this.bookRepository.save(bookEntity);
        return bookEntity;
    }
    ;
    async getBookById(id) {
        const book = await this.bookRepository.findOne({ where: { id: id }, relations: ['author'] });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ${book.id} was not found.`);
        }
        ;
    }
    ;
    async deleteBook(id) {
        const deleteBook = await this.bookRepository.delete(id);
        if (!deleteBook.affected) {
            throw new common_1.NotFoundException("Book was not found.");
        }
        ;
    }
    ;
    async updateBook(id, updateBookProps) {
        const updateBook = await this.bookRepository.update(id, updateBookProps);
        if (!updateBook.affected) {
            throw new common_1.NotFoundException('Book was not found.');
        }
        ;
    }
    ;
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.BookORMEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookService);
//# sourceMappingURL=book.service.js.map