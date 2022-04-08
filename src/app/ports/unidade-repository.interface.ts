import { Unidade } from '@/domain/aggregates/unidade';

export interface IUnidadeRepository {
  salvar(unidade: Unidade): Promise<Unidade>;
}
