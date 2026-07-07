import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { configService } from './config/config.service';
import { WinstonModule } from 'nest-winston';
import { HealthModule } from './health/health.module';
import * as winston from 'winston';
import * as path from 'path';

@Module({
  imports: [
    WinstonModule.forRoot({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/debug/'),
          filename: 'debug.log',
          level: 'debug',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/error/'),
          filename: 'error.log',
          level: 'error',
        }),
        new winston.transports.File({
          dirname: path.join(__dirname, './../log/info/'),
          filename: 'info.log',
          level: 'info',
        }),
        new winston.transports.Console({ level: 'debug' }),
      ],
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    BooksModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// old
//@Module({
//  imports: [
//    TypeOrmModule.forRoot({
//      type: 'mysql',
//      host: '127.0.0.1',
//      port: 3306,
//      username: 'ic_root',
//      password: 'icaro1010',
//      database: 'tutorial',
//      entities: [Book],
//      synchronize: true,
//    }),
//    TypeOrmModule.forFeature([Book]),
//  ],
//  controllers: [AppController, BooksController],
//  providers: [AppService, BooksService],
//})
//export class AppModule {}
