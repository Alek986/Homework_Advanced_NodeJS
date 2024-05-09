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
exports.AuthorController = void 0;
const common_1 = require("@nestjs/common");
const author_service_1 = require("./author.service");
const author_dto_1 = require("./dto/author_dto");
let AuthorController = class AuthorController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    async listAuthor() {
        const author = await this.authorService.readAuthor();
        return author;
    }
    ;
    async createAuthor(requestBody) {
        const authorCreationProps = {
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            from: requestBody.from,
            birthDate: requestBody.birthDate
        };
        const author = await this.authorService.createAuthor(authorCreationProps);
        return { message: `Author was created: ${author.id}.` };
    }
    ;
    async getAuthorById(id) {
        const authorById = await this.authorService.getAuthorById(id);
        return authorById;
    }
    ;
    async deleteAuthor(id) {
        await this.authorService.deleteAuthor(id);
        return { message: "Delete success" };
    }
    ;
    async updateAuthor(id, requestBody) {
        const updatedAuthor = await this.authorService.updateAuthor(id, requestBody);
        return updatedAuthor;
    }
    ;
};
exports.AuthorController = AuthorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "listAuthor", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_dto_1.AuthorDTO]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "createAuthor", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthorById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteAuthor", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, author_dto_1.UpdatedAuthorDTO]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAuthor", null);
exports.AuthorController = AuthorController = __decorate([
    (0, common_1.Controller)('author'),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorController);
//# sourceMappingURL=author.controller.js.map