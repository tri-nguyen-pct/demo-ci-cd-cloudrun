import { NestFactory } from '@nestjs/core';
import { bootstrapOpenApi } from 'bootstraps/openapi.bootstrap';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/apis/v0');
  bootstrapOpenApi(app);
  const port = process.env.PORT;
  await app.listen(port, () => {
    console.log(`Listening on port ${port}: ...`);
  });
}
bootstrap();
