import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AtualizarUnidadeCommand } from '@/app/commands/atualizar-unidade.command';
import { UnidadeResponse } from '@/app/dtos/response/unidade.response';
import {
  IUnidadeRepository,
  IUnidadeRepositoryDI,
} from '@/app/ports/unidade-repository.interface';
import { Inject } from '@nestjs/common';
import { Unidade } from '@/domain/aggregates/unidade';
import { Endereco } from '@/domain/aggregates/endereco';

@CommandHandler(AtualizarUnidadeCommand)
export class AtualizarUnidadeCommandHandler
  implements ICommandHandler<AtualizarUnidadeCommand, UnidadeResponse>
{
  constructor(
    @Inject(IUnidadeRepositoryDI)
    private readonly unidadeRepository: IUnidadeRepository,
  ) {}

  async execute(command: AtualizarUnidadeCommand): Promise<UnidadeResponse> {
    const { request } = command;

    const unidade = Unidade.create(
      {
        descricao: request.descricao,
        urlAmigavel: request.url_amigavel,
        endereco: Endereco.create({
          estado: request.endereco.estado,
          cidade: request.endereco.cidade,
          logradouro: request.endereco.logradouro,
          numero: request.endereco.numero,
          bairro: request.endereco.bairro,
          cep: request.endereco.cep,
          latitude: request.endereco.latitude,
          longitude: request.endereco.longitude,
        }),
        telefone: request.telefone,
        celular: request.celular,
        email: request.email,
        urlFacebook: request.url_facebook,
        urlInstagram: request.url_instagram,
        urlYoutube: request.url_youtube,
        status: request.status === '1',
      },
      request.id,
    );

    const unidadeAtualizada = await this.unidadeRepository.salvar(unidade);

    return {
      id: unidadeAtualizada.getId(),
      descricao: unidadeAtualizada.descricao,
      url_amigavel: unidadeAtualizada.urlAmigavel,
      endereco: {
        estado: unidadeAtualizada.endereco.estado,
        cidade: unidadeAtualizada.endereco.cidade,
        logradouro: unidadeAtualizada.endereco.logradouro,
        numero: unidadeAtualizada.endereco.numero,
        bairro: unidadeAtualizada.endereco.bairro,
        cep: unidadeAtualizada.endereco.cep,
        latitude: unidadeAtualizada.endereco.latitude,
        longitude: unidadeAtualizada.endereco.longitude,
      },
      telefone: unidadeAtualizada.telefone,
      celular: unidadeAtualizada.celular,
      email: unidadeAtualizada.email,
      url_facebook: unidadeAtualizada.urlFacebook,
      url_instagram: unidadeAtualizada.urlInstagram,
      url_youtube: unidadeAtualizada.urlYoutube,
      status: unidadeAtualizada.status,
    };
  }
}
