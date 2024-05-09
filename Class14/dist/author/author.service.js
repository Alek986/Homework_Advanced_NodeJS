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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const author_entity_1 = require("./entity/author_entity");
const typeorm_2 = require("typeorm");
let AuthorService = class AuthorService {
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async readAuthor() {
        const author = await this.authorRepository.find({ relations: ['books'] });
        return author;
    }
    ;
    async createAuthor(authorCreationProps) {
        const author = {
            firstName: authorCreationProps.firstName,
            lastName: authorCreationProps.lastName,
            from: authorCreationProps.from,
            birthDate: authorCreationProps.birthDate
        };
        const authorEntity = this.authorRepository.create({ ...author, books: [] });
        await this.authorRepository.save(authorEntity);
        return authorEntity;
    }
    ;
    async getAuthorById(id) {
        const author = await this.authorRepository.findOne({ where: { id: id }, relations: ['books'] });
        if (!author) {
            throw new common_1.NotFoundException(`Author with ${author.id} was not found.`);
        }
        ;
    }
    ;
    async deleteAuthor(id) {
        const deleteAuthor = await this.authorRepository.delete(id);
        if (!deleteAuthor.affected) {
            throw new common_1.NotFoundException("Author was not found.");
        }
        ;
    }
    ;
    async updateAuthor(id, updateAuthorProps) {
        const updateAuthor = await this.authorRepository.update(id, updateAuthorProps);
        if (!updateAuthor.affected) {
            throw new common_1.NotFoundException('Author was not found.');
        }
        ;
    }
    ;
};
exports.AuthorService = AuthorService;
exports.AuthorService = AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(author_entity_1.AuthorORMEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthorService);
//# sourceMappingURL=author.service.js.map