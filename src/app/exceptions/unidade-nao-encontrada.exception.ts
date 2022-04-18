import { NotFoundException } from '@nestjs/common';

export class UnidadeNaoEncontradaException extends NotFoundException {
  constructor() {
    super(undefined, 'Unidade não foi encontrada');
  }
}
