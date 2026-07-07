import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const swStats = require('swagger-stats');

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);

  // Registrar swagger-stats en Express ANTES del router de NestJS
  const expressApp = app.getHttpAdapter().getInstance();

  app.setGlobalPrefix('api/v1');

  // Configurar títulos de documnentación
  const options = new DocumentBuilder()
    .setTitle('Bookstore REST API')
    .setDescription('API REST de Bookstore')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document);

  expressApp.use(
    swStats.getMiddleware({
      name: 'api-catalog',
      swaggerSpec: document,
      authentication: true,
      onAuthenticate: function (req: any, username: string, password: string) {
        return username === 'admin' && password === 'secret';
      },
    }),
  );

  await app.listen(port);

  console.log(`\n The app is run in: http://localhost:${port}`);
  console.log('Matriz http://localhost:3000/swagger-stats/#/login');
}

void bootstrap();
