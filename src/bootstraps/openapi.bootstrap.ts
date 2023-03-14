import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
export const bootstrapOpenApi = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('CI/CD demonstration')
    .setDescription('CI/CD demonstration description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};
