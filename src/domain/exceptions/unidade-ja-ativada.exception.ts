import { UnprocessableEntityException } from '@nestjs/common';

export class UnidadeJaAtivadaException extends UnprocessableEntityException {
  constructor() {
    super(null, 'A unidade ja esta ativada');
  }
}
