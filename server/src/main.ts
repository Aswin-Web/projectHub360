import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { GOOGLE_CLIENT_ID, GOOGLE_SECRET_ID } from './config/config';
// import * as dotenv from 'dotenv';

// dotenv.config({ path: '/.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  await app.listen(process.env.PORT ?? 5002);
}
bootstrap();
