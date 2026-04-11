import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  /* const app = await NestFactory.create(AppModule, { cors: true }); */
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://burguer-queen-blush.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Burguer queen')
    .setDescription('Documentación API')
    .setVersion('1.0')
    .addBearerAuth({
      bearerFormat: 'JWT',
      type: 'http'
    }, 'jwt')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  /* await app.listen(3000); */
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
