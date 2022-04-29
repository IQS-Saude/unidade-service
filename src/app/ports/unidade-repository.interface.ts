import { Unidade } from '@/domain/aggregates/unidade';

export const IUnidadeRepositoryDI = 'IUnidadeRepository';

export interface IUnidadeRepository {
  salvar(unidade: Unidade): Promise<Unidade>;

  listarTodos(desativados: boolean): Promise<Unidade[]>;

  buscarPorId(id: number): Promise<Unidade | null>;
}
