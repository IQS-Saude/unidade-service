import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import {
  IUnidadeRepository,
  IUnidadeRepositoryDI,
} from '@/app/ports/unidade-repository.interface';
import { UnidadeNaoEncontradaException } from '@/app/exceptions/unidade-nao-encontrada.exception';
import { AtivarUnidadeCommand } from '@/app/commands/ativar-unidade.command';

@CommandHandler(AtivarUnidadeCommand)
export class AtivarUnidadeCommandHandler
  implements ICommandHandler<AtivarUnidadeCommand>
{
  constructor(
    @Inject(IUnidadeRepositoryDI)
    private readonly unidadeRepository: IUnidadeRepository,
  ) {}

  async execute(command: AtivarUnidadeCommand): Promise<any> {
    const unidade = await this.unidadeRepository.buscarPorId(command.unidadeId);

    if (!unidade) {
      throw new UnidadeNaoEncontradaException();
    }

    unidade.ativarUnidade();
    await this.unidadeRepository.salvar(unidade);
  }
}
