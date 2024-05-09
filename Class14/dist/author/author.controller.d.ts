import { AuthorService } from './author.service';
import { AuthorDTO, UpdatedAuthorDTO } from './dto/author_dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    listAuthor(): Promise<import("./entity/author_entity").AuthorORMEntity[]>;
    createAuthor(requestBody: AuthorDTO): Promise<{
        message: string;
    }>;
    getAuthorById(id: string): Promise<void>;
    deleteAuthor(id: string): Promise<{
        message: string;
    }>;
    updateAuthor(id: string, requestBody: UpdatedAuthorDTO): Promise<void>;
}
