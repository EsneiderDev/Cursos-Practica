import {
  Controller,
  Body,
  Query,
  Param,
  Req,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
  Inject,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BooksService } from './books.service';
import type { Request } from 'express';
import { BookDto } from './book.dto';
//import { Book } from './book.class';
import { Book } from './book.entity';
import { HttpStatus } from '@nestjs/common';

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Controller('books')
//@UseGuards(AuthGuard('jwt'))
@ApiTags('book')
@ApiBearerAuth('access-token')
export class BooksControllerOld {
  constructor(
    private bookService: BooksService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  // http://localhost:3000/api/v1/books/1
  //@Get()
  //findAll(@Query('order') order: string) {
  //  let params = [];
  //  if (order !== undefined) {
  //    params.push(`'${order}'`);
  //  }
  //  return this.bookService.findAll(params);
  //}
  // http://localhost:3000/api/v1/books?sort=1

  // ====== 4.2.3. Una solución más dinámica =========
  //@Get()
  //@Get()
  //findAll(@Req() request: Request) {
  //  return this.booksService.findAll(request.query);
  //}

  // Corregido por Claude
  //@Get()
  //findAll(@Query() params: Record<string, string>): string {
  //  return this.bookService.findAll(params);
  //}

  //// http://localhost:3000/api/v1/books?order=1&limit=10
  //@Get(':RequestedBookId')
  //findBook(@Param('RequestedBookId') bookId: string) {
  //  return this.bookService.findBook(bookId);
  //}

  // s4.3. Creación de un libro
  // http://localhost:3000/api/v1/books
  /*
    {
      "title": "El enigma de la habitación 622",
      "genre": "Ficción contemporánea",
      "description": "Vuelve el «principito de la literatura negra contemporánea, el niño mimado de la industria literaria» (GQ): el nuevo thriller de Joël Dicker es su novela más personal. ",
      "author": "Joël Dicker",
      "publisher": "Alfaguara",
      "pages": 624,
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/41KiZbwOhhL._SX315_BO1,204,203,200_.jpg"
     } 
   */
  //@Post()
  //createBook(@Body() body) {
  //  let newBook: any = body;
  //  return this.bookService.createBook(newBook);
  //}

  // 4.4. Eliminación de un libro
  // http://localhost:3000/api/v1/books/1
  //@Delete(':bookId')
  //deleteBook(@Param('bookId') bookId: string) {
  //  return this.bookService.deleteBook(bookId);
  //}

  // s4.3. Creación de un libro
  //@Put('bookId')
  //updateBook(@Param() bodyId: string, @Body() body) {
  //  let newBook: any = body;
  //  return this.bookService.updateBook(bodyId, newBook);
  //}

  // 5. Tipado de objetos
  //@Post()
  //createBook(@Body() newBook: BookDto): any {
  //  return this.bookService.createBook(newBook);
  //}

  //@Put(':bookId')
  //updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto): any {
  //  return this.bookService.updateBook(bookId, newBook);
  //}

  // ====  6. Finalización del mockeado ====
  // debimos instalar typos import type { Request } from 'express';
  // http://localhost:3000/api/v1/books
  //@Get()
  //findAll(@Req() request: Request): Book[] {
  //  console.log(request.query);
  //  return this.bookService.findAll(request.query);
  //}

  // http://localhost:3000/api/v1/books/1
  //@Get(':bookId')
  //findBook(@Param('bookId') bookId: string): Book {
  //  console.log("============ entro aquí ");
  //  return this.bookService.findBook(bookId);
  //}

  /*
    http://localhost:3000/api/v1/books/1
    
    {
      "title": "El enigma de la habitación 622",
      "genre": "Ficción contemporánea",
      "description": "Vuelve el «principito de la literatura negra contemporánea, el niño mimado de la industria literaria» (GQ): el nuevo thriller de Joël Dicker es su novela más personal. ",
      "author": "Joël Dicker",
      "publisher": "Alfaguara",
      "pages": 624,
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/41KiZbwOhhL._SX315_BO1,204,203,200_.jpg"
    } 
  */
  //@Post()
  //createBook(@Body() newBook: BookDto): Book {
  //  return this.bookService.createBook(newBook);
  //}

  // http://localhost:3000/api/v1/books/1
  //@Delete(':bookId')
  //deleteBook(@Param(':bookId') bookId: string): Book {
  //  return this.bookService.deleteBook(bookId);
  //}

  /*
    http://localhost:3000/api/v1/books/1
    
    {
      "title": "El enigma de la habitación 622",
      "genre": "Ficción contemporánea",
      "description": "Vuelve el «principito de la literatura negra contemporánea, el niño mimado de la industria literaria» (GQ): el nuevo thriller de Joël Dicker es su novela más personal. ",
      "author": "Joël Dicker",
      "publisher": "Alfaguara",
      "pages": 624,
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/41KiZbwOhhL._SX315_BO1,204,203,200_.jpg"
    } 
  */
  //@Put(':bookId')
  //updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto): Book {
  //  return this.bookService.updateBook(bookId, newBook);
  //}

  // 7. Creación de servicios conectados a bases de datos
  // pnpm install --save @nestjs/typeorm typeorm mysql  --> ya no sirve
  // se instalo pnpm install --save @nestjs/typeorm typeorm mysql2

  /**
   *
   * @returns {Book[]} Devuelve una lista de libros
   * @param {Request} request Lista de parámetros para filtrar
   */
  //@Get()
  ////@UseGuards(AuthGuard('jwt'))
  //@ApiOperation({ summary: 'Obtener lista de libros' })
  //@ApiResponse({
  //  status: 201,
  //  description: 'Lista de libros',
  //  type: Book,
  //})
  //findAll(@Req() request: Request): Promise<Book[] | []> {
  //  let startTime = Date.now();
  //  let data = this.bookService.findAll(request.query);
  //  this.writeLog(startTime, request, 200);
  //  return data;
  //}

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string): Promise<Book | null> {
    return this.bookService.findBook(bookId);
  }

  @Post()
  createBook(@Body() newBook: BookDto): Promise<Book> {
    return this.bookService.createBook(newBook);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string): Promise<Book> {
    return this.bookService.deleteBook(bookId);
  }

  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto) {
    return this.bookService.updateBook(bookId, newBook);
  }

  /*
  writeLog(startTime: any, request: any, statusCode: number) {
    let finishTime = Date.now();
    let elapsedTime = finishTime - startTime;

    this.logger.log({
      level: 'info',
      message: '',
      statusCode: statusCode,
      method: request['method'],
      url: request['url'],
      user: request['user'].username,
      duration: elapsedTime,
    });
  } */

  // Mio
  private writeLog(
    startTime: number,
    request: Request,
    statusCode: number,
  ): void {
    let finishTime = Date.now();
    let elapsedTime = finishTime - startTime;

    this.logger.log({
      level: 'info',
      message: `${request.method} ${request.url} status code: ${statusCode} — ${Date.now() - startTime}ms`,
      service: 'BooksController',
      method: request.method,
      url: request.url,
      statusCode,
      user: request['user']?.username ?? '',
      duration: `${elapsedTime}ms`,
    });
  }

  // http://localhost:3000/docs-json <- Para generar y poder descargar un archivo Swagger JSON
  // npm install --save nestjs-redoc@1.3.1

  // 11. Mejora del controlador con estados HTTP estándar

  //@ApiOperation({ summary: 'Obtener lista de libros' })
  //@ApiResponse({
  //  status: HttpStatus.OK,
  //  description: 'Lista de libros',
  //  type: [Book],
  //})
  //async findAll(@Req() request: Request, @Res() res): Promise<Book[]> {
  //  let startTime = Date.now();
  //  let data = await this.bookService.findAll(request.query);
  //  this.writeLog(startTime, request, HttpStatus.OK);
  //  return res.status(HttpStatus.OK).json({
  //    statusCode: HttpStatus.OK,
  //    message: message,
  //    data: data,
  //  });
  //}
}
