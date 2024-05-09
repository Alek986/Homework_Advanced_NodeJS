import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorORMEntity } from './entity/author_entity';
import { Repository } from 'typeorm';
import { AuthorCreationProps, AuthorInterface, UpdateAuthorProps } from 'src/interface/interfaces';


@Injectable()
export class AuthorService {
    constructor (@InjectRepository(AuthorORMEntity)
private authorRepository: Repository<AuthorORMEntity>){}

async readAuthor(){
    const author = await this.authorRepository.find({relations:['books']});

    return author
};

async createAuthor(authorCreationProps: AuthorCreationProps){

    const author: AuthorInterface = {
    firstName: authorCreationProps.firstName,
    lastName: authorCreationProps.lastName,
    from: authorCreationProps.from,
    birthDate: authorCreationProps.birthDate
    };
    

    const authorEntity = this.authorRepository.create({...author, books:[]});
    await this.authorRepository.save(authorEntity);

    return authorEntity;
};


async getAuthorById (id: string){

    const author = await this.authorRepository.findOne({where:{id:id}, relations: ['books']});

    if(!author){
        throw new NotFoundException (`Author with ${author.id} was not found.`);
    };
};

async deleteAuthor(id:string){
    const deleteAuthor = await this.authorRepository.delete(id);

    if(!deleteAuthor.affected){
        throw new NotFoundException ("Author was not found.");
    };
};

async updateAuthor(id:string, updateAuthorProps: UpdateAuthorProps){
    const updateAuthor = await this.authorRepository.update(id,updateAuthorProps);

    if(!updateAuthor.affected){
        throw new NotFoundException('Author was not found.')
    };
};
}
