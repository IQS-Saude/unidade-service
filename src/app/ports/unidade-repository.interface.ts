import { Unidade } from '@/domain/aggregates/unidade';

export const IUnidadeRepositoryDI = 'IUnidadeRepository';

export interface IUnidadeRepository {
  salvar(unidade: Unidade): Promise<Unidade>;

  listarTodos(status: boolean): Promise<Unidade[]>;

  buscarPorId(id: number): Promise<Unidade | null>;

  contarAtivas(): Promise<number>;

  contarInativas(): Promise<number>;
}
