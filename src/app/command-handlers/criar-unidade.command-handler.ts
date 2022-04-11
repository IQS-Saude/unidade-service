import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import {
  IUnidadeRepository,
  IUnidadeRepositoryDI,
} from '@/app/ports/unidade-repository.interface';
import { CriarUnidadeCommand } from '@/app/commands/criar-unidade.command';
import { Unidade } from '@/domain/aggregates/unidade';
import { Endereco } from '@/domain/aggregates/endereco';
import { UnidadeResponse } from '@/app/dtos/response/unidade.response';

@CommandHandler(CriarUnidadeCommand)
export class CriarUnidadeCommandHandler
  implements ICommandHandler<CriarUnidadeCommand, UnidadeResponse>
{
  constructor(
    @Inject(IUnidadeRepositoryDI)
    private readonly unidadeRepository: IUnidadeRepository,
  ) {}

  async execute(command: CriarUnidadeCommand): Promise<UnidadeResponse> {
    const { request } = command;

    const unidade = Unidade.create({
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
      status: request.status,
    });

    const unidadeCriada = await this.unidadeRepository.salvar(unidade);

    return {
      id: unidadeCriada.getId(),
      descricao: unidadeCriada.descricao,
      url_amigavel: unidadeCriada.urlAmigavel,
      endereco: {
        estado: unidadeCriada.endereco.estado,
        cidade: unidadeCriada.endereco.cidade,
        logradouro: unidadeCriada.endereco.logradouro,
        numero: unidadeCriada.endereco.numero,
        bairro: unidadeCriada.endereco.bairro,
        cep: unidadeCriada.endereco.cep,
        latitude: unidadeCriada.endereco.latitude,
        longitude: unidadeCriada.endereco.longitude,
      },
      telefone: unidadeCriada.telefone,
      celular: unidadeCriada.celular,
      email: unidadeCriada.email,
      url_facebook: unidadeCriada.urlFacebook,
      url_instagram: unidadeCriada.urlInstagram,
      url_youtube: unidadeCriada.urlYoutube,
      status: unidadeCriada.status,
    };
  }
}
