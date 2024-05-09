import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorORMEntity } from './entity/author_entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorORMEntity])],
  providers: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
