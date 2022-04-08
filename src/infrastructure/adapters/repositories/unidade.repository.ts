import { IUnidadeRepository } from '@/app/ports/unidade-repository.interface';
import { PrismaService } from '@/infrastructure/data/prisma.service';
import { Unidade } from '@/domain/aggregates/unidade';

export class UnidadeRepository implements IUnidadeRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async salvar(unidade: Unidade): Promise<Unidade> {
    this.prismaService
  }
}
