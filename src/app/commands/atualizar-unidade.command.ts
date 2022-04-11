import { AtualizarUnidadeRequest } from '@/api/dtos/atualizar-unidade.request';

export class AtualizarUnidadeCommand {
  constructor(public readonly request: AtualizarUnidadeRequest) {}
}
