import { CriarUnidadeRequest } from '@/api/dtos/criar-unidade.request';

export class CriarUnidadeCommand {
  constructor(public readonly request: CriarUnidadeRequest) {}
}
