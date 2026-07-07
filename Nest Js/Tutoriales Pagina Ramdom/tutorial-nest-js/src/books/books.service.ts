import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { BookDto } from './book.dto';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { Book } from './book.class';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Injectable()
export class BooksService {
  //findAll(params): any {
  //  return params.length > 0
  //    ? `find funcionando con ${params}`
  //    : 'finAll funcionando';
  //}

  // 4.2.3. Una solución más dinámica
  //findAll(params): any {
  //  let msg = `findAll funcionando. Parámetros:`;

  //  if (params.order !== undefined) {
  //    msg = msg + ` order: ${params.order}`;
  //  }

  //  if (params.limit !== undefined) {
  //    msg = msg + ` limit: ${params.limit}`;
  //  }

  //  return msg;
  //}

  //findBook(bookId: string) {
  //  return `findBook funcionando con BookId : ${bookId}`;
  //}

  //// 4.3. Creación de un libros
  //createBook(newBook: any) {
  //  return newBook;
  //}

  //// 4.4. Eliminación de un libro
  //deleteBook(bookId: string) {
  //  return `deleteBook funcionando con bookId: ${bookId}`;
  //}

  //updateBook(bodyId: string, newBook: any) {
  //  return newBook;
  //}

  //books: Book[] = [
  //  {
  //    id: 1,
  //    title: 'Una historia de España',
  //    genre: 'Historia',
  //    description:
  //      'Un relato ameno, personal, a ratos irónico, pero siempre único, de nuestra accidentada historia a través de los siglos. Una obra concebida por el autor para, en palabras suyas, «divertirme, releer y disfrutar; un pretexto para mirar atrás desde los tiempos remotos hasta el presente, reflexionar un poco sobre ello y contarlo por escrito de una manera poco ortodoxa.',
  //    author: 'Arturo Pérez-Reverte',
  //    publisher: 'Alfaguara',
  //    pages: 256,
  //    image_url:
  //      'https://images-na.ssl-images-amazon.com/images/I/41%2B-e981m1L._SX311_BO1,204,203,200_.jpg',
  //  },
  //  {
  //    id: 2,
  //    title: 'Historia de España contada para escépticos',
  //    genre: 'Historia',
  //    description:
  //      'Como escribe el autor, no pretende ser veraz, justa y desapasionada, porque ninguna historia lo es. No está hecha para halagar a reyes y gobernantes, ni pretende halagar a los banqueros, ni a la Conferencia Episcopal, ni al colectivo gay.',
  //    author: 'Juan Eslava Galán',
  //    publisher: 'Booket',
  //    pages: 592,
  //    image_url:
  //      'https://images-na.ssl-images-amazon.com/images/I/51IyZ5Mq8YL._SX326_BO1,204,203,200_.jpg',
  //  },
  //];
  //
  //findAll(params): Book[] {
  //  return this.books;
  //}
  //
  //findBook(bookId: string): Book {
  //  return this.books[parseInt(bookId) - 1];
  //}
  //
  //createBook(newBook: BookDto): Book {
  //  const book = new Book();
  //
  //  book.id = 99;
  //  book.author = newBook.author;
  //  book.description = newBook.description;
  //  book.genre = newBook.genre;
  //  book.image_url = newBook.image_url;
  //  book.pages = newBook.pages;
  //  book.publisher = newBook.publisher;
  //  book.title = newBook.title;
  //
  //  return book;
  //}
  //
  //deleteBook(bookId: string): Book {
  //  return this.books[parseInt(bookId) - 1];
  //}
  //
  //updateBook(bookId: string, newBook: BookDto): Book {
  //  return this.books[parseInt(bookId) - 1];
  //}

  // 7. Creación de servicios conectados a bases de datos
  // pnpm install --save @nestjs/typeorm typeorm mysql

  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    @InjectMetric('books_served') public counter: Counter<string>,
  ) {}

  async findAll(params): Promise<Book[]> {
    this.counter.inc();
    return await this.booksRepository.find();
  }

  async findBook(bookId: string): Promise<Book | null> {
    return await this.booksRepository.findOne({
      where: { id: parseInt(bookId) },
    });
  }

  async createBook(newBook: BookDto): Promise<Book> {
    return this.booksRepository.save(newBook);
  }

  async deleteBook(bookId: string): Promise<any> {
    return await this.booksRepository.delete({ id: parseInt(bookId) });
  }

  async updateBook(bookId: string, newBook: BookDto): Promise<Book> {
    const toUpdate = await this.booksRepository.findOne({
      where: { id: parseInt(bookId) },
    });

    if (!toUpdate) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }

    const updated = Object.assign(toUpdate, newBook);

    return this.booksRepository.save(updated);
  }

  // npm install --save pg si queremos cambiarla ahora una base de datos postgres
}
