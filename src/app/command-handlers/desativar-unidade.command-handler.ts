import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DesativarUnidadeCommand } from '@/app/commands/desativar-unidade.command';
import { Inject } from '@nestjs/common';
import {
  IUnidadeRepository,
  IUnidadeRepositoryDI,
} from '@/app/ports/unidade-repository.interface';
import { UnidadeNaoEncontradaException } from '@/app/exceptions/unidade-nao-encontrada.exception';

@CommandHandler(DesativarUnidadeCommand)
export class DesativarUnidadeCommandHandler
  implements ICommandHandler<DesativarUnidadeCommand>
{
  constructor(
    @Inject(IUnidadeRepositoryDI)
    private readonly unidadeRepository: IUnidadeRepository,
  ) {}

  async execute(command: DesativarUnidadeCommand): Promise<any> {
    const unidade = await this.unidadeRepository.buscarPorId(command.unidadeId);

    if (!unidade) {
      throw new UnidadeNaoEncontradaException();
    }

    unidade.desativarUnidade();
    await this.unidadeRepository.salvar(unidade);
  }
}
