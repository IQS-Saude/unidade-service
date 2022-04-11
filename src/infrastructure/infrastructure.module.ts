import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { IUnidadeRepositoryDI } from '@/app/ports/unidade-repository.interface';
import { UnidadeRepository } from '@/infrastructure/adapters/repositories/unidade.repository';
import { AppModule } from '@/app/app.module';
import { CqrsModule } from '@nestjs/cqrs';
import { UnidadeModel } from '@/infrastructure/data/models/unidade.model';

@Global()
@Module({
  imports: [
    AppModule,
    CqrsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      migrations: ['{dist, src}/infrastructure/data/migrations/*.{js, ts}'],
      migrationsRun: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([UnidadeModel]),
  ],
  providers: [
    {
      provide: IUnidadeRepositoryDI,
      useClass: UnidadeRepository,
    },
  ],
  exports: [IUnidadeRepositoryDI],
})
export class InfrastructureModule {}
