import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IUnidadeRepositoryDI } from '@/app/ports/unidade-repository.interface';
import { UnidadeRepository } from '@/infrastructure/adapters/repositories/unidade.repository';
import { AppModule } from '@/app/app.module';
import { CqrsModule } from '@nestjs/cqrs';
import { UnidadeModel } from '@/infrastructure/data/models/unidade.model';
import { typeOrmConfiguration } from '@/ioc/configurations/typeorm.configuration';

@Global()
@Module({
  imports: [
    AppModule,
    CqrsModule,
    TypeOrmModule.forRootAsync({ useFactory: typeOrmConfiguration }),
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
