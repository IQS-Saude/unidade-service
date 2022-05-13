import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { DashboardUnidadeQuery } from '@/app/queries/dashboard-unidade.query';
import { DashboardResponse } from '@/app/dtos/response/dashboard.response';
import { Inject } from '@nestjs/common';
import {
  IUnidadeRepository,
  IUnidadeRepositoryDI,
} from '@/app/ports/unidade-repository.interface';

@QueryHandler(DashboardUnidadeQuery)
export class DashboardUnidadeQueryHandler
  implements IQueryHandler<DashboardUnidadeQuery, DashboardResponse>
{
  constructor(
    @Inject(IUnidadeRepositoryDI)
    private readonly unidadeRepository: IUnidadeRepository,
  ) {}

  async execute(_query: DashboardUnidadeQuery): Promise<DashboardResponse> {
    const contagem = await Promise.all([
      this.unidadeRepository.contarAtivas(),
      await this.unidadeRepository.contarInativas(),
    ]);

    return {
      ativas: contagem[0],
      inativas: contagem[1],
      nome: 'unidades',
    };
  }
}
