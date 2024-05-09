import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookORMEntity } from './entity/book_entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookORMEntity])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
