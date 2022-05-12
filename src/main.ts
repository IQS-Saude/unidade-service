import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { IocModule } from '@/ioc/ioc.module';
import { SwaggerConfiguration } from '@/ioc/configurations/swagger.configuration';

async function bootstrap() {
  const app = await NestFactory.create(IocModule);

  app.setGlobalPrefix('unidades');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  SwaggerConfiguration.addSwagger(app);

  await app.listen(process.env.APP_PORT);
}
bootstrap()
  .then(() =>
    Logger.log(
      `Application started successfully! Listening on port ${process.env.APP_PORT}`,
    ),
  )
  .catch(Logger.error);
