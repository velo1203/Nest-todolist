import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 여기에서 글로벌 접두사를 설정합니다.
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder() // 여기에서 Swagger 설정을 추가합니다.
    .setTitle('Nest boilerplate API')
    .setDescription('Nest API Example using Prisma and Swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config); // 여기에서 Swagger 문서를 생성합니다.
  SwaggerModule.setup('api', app, document); // 여기에서 Swagger UI를 설정합니다.

  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
