import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { IocModule } from '@/ioc/ioc.module';

async function bootstrap() {
  const app = await NestFactory.create(IocModule);
  await app.listen(3000);
}
bootstrap()
  .then(() => Logger.log('Application started successfully!'))
  .catch(Logger.error);
