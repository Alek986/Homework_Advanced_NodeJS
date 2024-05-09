import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDTO, UpdatedAuthorDTO } from './dto/author_dto';
import { AuthorCreationProps } from 'src/interface/interfaces';

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) { }

    @Get()
    async listAuthor() {
        const author = await this.authorService.readAuthor();

        return author;
    };

    @Post()
    async createAuthor(@Body() requestBody: AuthorDTO) {

        const authorCreationProps: AuthorCreationProps = {
            firstName: requestBody.firstName,
            lastName: requestBody.lastName,
            from: requestBody.from,
            birthDate: requestBody.birthDate
        };

        const author = await this.authorService.createAuthor(authorCreationProps);

        return {message: `Author was created: ${author.id}.`}
    };

    @Get(':id')
    async getAuthorById(@Param('id') id:string){
        
        const authorById = await this.authorService.getAuthorById(id)

        return authorById;
    };

    @Delete(':id')
    async deleteAuthor(@Param('id') id:string){

        await this.authorService.deleteAuthor(id)

        return {message: "Delete success"};
    };


    @Put()
    async updateAuthor(@Param('id') id: string, @Body() requestBody: UpdatedAuthorDTO){
        const updatedAuthor = await this.authorService.updateAuthor(id, requestBody);

        return updatedAuthor;
    };
}
