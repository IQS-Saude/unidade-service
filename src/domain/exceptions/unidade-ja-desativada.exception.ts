import { UnprocessableEntityException } from '@nestjs/common';

export class UnidadeJaDesativadaException extends UnprocessableEntityException {
  constructor() {
    super(null, 'A unidade ja esta desativada');
  }
}
