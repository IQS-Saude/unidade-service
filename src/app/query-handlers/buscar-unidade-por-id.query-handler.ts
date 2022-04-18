import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BuscarUnidadePorIdQuery } from '@/app/queries/buscar-unidade-por-id.query';
import { UnidadeResponse } from '@/app/dtos/response/unidade.response';
import { Inject } from '@nestjs/common';
import {
  IUnidadeRepository,
  IUnidadeRepositoryDI,
} from '@/app/ports/unidade-repository.interface';
import { UnidadeNaoEncontradaException } from '@/app/exceptions/unidade-nao-encontrada.exception';

@QueryHandler(BuscarUnidadePorIdQuery)
export class BuscarUnidadePorIdQueryHandler
  implements IQueryHandler<BuscarUnidadePorIdQuery, UnidadeResponse>
{
  constructor(
    @Inject(IUnidadeRepositoryDI)
    private readonly unidadeRepository: IUnidadeRepository,
  ) {}

  async execute(query: BuscarUnidadePorIdQuery): Promise<UnidadeResponse> {
    const unidade = await this.unidadeRepository.buscarPorId(query.id);

    if (!unidade) {
      throw new UnidadeNaoEncontradaException();
    }

    return {
      id: unidade.getId(),
      descricao: unidade.descricao,
      url_amigavel: unidade.urlAmigavel,
      endereco: {
        estado: unidade.endereco.estado,
        cidade: unidade.endereco.cidade,
        logradouro: unidade.endereco.logradouro,
        numero: unidade.endereco.numero,
        bairro: unidade.endereco.bairro,
        cep: unidade.endereco.cep,
        latitude: unidade.endereco.latitude,
        longitude: unidade.endereco.longitude,
      },
      telefone: unidade.telefone,
      celular: unidade.celular,
      email: unidade.email,
      url_facebook: unidade.urlFacebook,
      url_instagram: unidade.urlInstagram,
      url_youtube: unidade.urlYoutube,
      status: unidade.status,
    };
  }
}
