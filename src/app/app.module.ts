import { Module } from '@nestjs/common';
import { DomainModule } from '@/domain/domain.module';
import { CqrsModule } from '@nestjs/cqrs';
import { CriarUnidadeCommandHandler } from '@/app/command-handlers/criar-unidade.command-handler';
import { AtualizarUnidadeCommandHandler } from '@/app/command-handlers/atualizar-unidade.command-handler';
import { ListarTodasUnidadesQueryHandler } from '@/app/query-handlers/listar-todas-unidades.query-handler';
import { BuscarUnidadePorIdQueryHandler } from '@/app/query-handlers/buscar-unidade-por-id.query-handler';
import { DesativarUnidadeCommandHandler } from '@/app/command-handlers/desativar-unidade.command-handler';
import { AtivarUnidadeCommandHandler } from '@/app/command-handlers/ativar-unidade.command-handler';
import { DashboardUnidadeQueryHandler } from '@/app/query-handlers/dashboard-unidade.query-handler';

@Module({
  imports: [DomainModule, CqrsModule],
  providers: [
    CriarUnidadeCommandHandler,
    AtualizarUnidadeCommandHandler,
    AtivarUnidadeCommandHandler,
    DesativarUnidadeCommandHandler,
    ListarTodasUnidadesQueryHandler,
    BuscarUnidadePorIdQueryHandler,
    DashboardUnidadeQueryHandler,
  ],
})
export class AppModule {}
