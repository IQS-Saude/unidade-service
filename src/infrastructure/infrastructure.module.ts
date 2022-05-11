import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { IUnidadeRepositoryDI } from '@/app/ports/unidade-repository.interface';
import { UnidadeRepository } from '@/infrastructure/adapters/repositories/unidade.repository';
import { AppModule } from '@/app/app.module';
import { CqrsModule } from '@nestjs/cqrs';
import { UnidadeModel } from '@/infrastructure/data/models/unidade.model';
import { typeOrmConfig } from '@/ioc/configurations/typeorm.configuration';

@Global()
@Module({
  imports: [
    AppModule,
    CqrsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
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
