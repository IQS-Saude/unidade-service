import { Module } from '@nestjs/common';
import { DomainModule } from '@/domain/domain.module';
import { CqrsModule } from '@nestjs/cqrs';
import { CriarUnidadeCommandHandler } from '@/app/command-handlers/criar-unidade.command-handler';
import { AtualizarUnidadeCommandHandler } from '@/app/command-handlers/atualizar-unidade.command-handler';
import { ListarTodasUnidadesQueryHandler } from '@/app/query-handlers/listar-todas-unidades.query-handler';
import { BuscarUnidadePorIdQueryHandler } from '@/app/query-handlers/buscar-unidade-por-id.query-handler';
import { DesativarUnidadeCommandHandler } from '@/app/command-handlers/desativar-unidade.command-handler';

@Module({
  imports: [DomainModule, CqrsModule],
  providers: [
    CriarUnidadeCommandHandler,
    AtualizarUnidadeCommandHandler,
    DesativarUnidadeCommandHandler,
    ListarTodasUnidadesQueryHandler,
    BuscarUnidadePorIdQueryHandler,
  ],
})
export class AppModule {}
