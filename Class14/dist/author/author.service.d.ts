import { AuthorORMEntity } from './entity/author_entity';
import { Repository } from 'typeorm';
import { AuthorCreationProps, UpdateAuthorProps } from 'src/interface/interfaces';
export declare class AuthorService {
    private authorRepository;
    constructor(authorRepository: Repository<AuthorORMEntity>);
    readAuthor(): Promise<AuthorORMEntity[]>;
    createAuthor(authorCreationProps: AuthorCreationProps): Promise<AuthorORMEntity>;
    getAuthorById(id: string): Promise<void>;
    deleteAuthor(id: string): Promise<void>;
    updateAuthor(id: string, updateAuthorProps: UpdateAuthorProps): Promise<void>;
}
