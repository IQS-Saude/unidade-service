import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListarTodasUnidadesQuery } from '@/app/queries/listar-todas-unidades.query';
import { UnidadeResponse } from '@/app/dtos/response/unidade.response';
import {
  IUnidadeRepository,
  IUnidadeRepositoryDI,
} from '@/app/ports/unidade-repository.interface';
import { Inject } from '@nestjs/common';

@QueryHandler(ListarTodasUnidadesQuery)
export class ListarTodasUnidadesQueryHandler
  implements IQueryHandler<ListarTodasUnidadesQuery, UnidadeResponse[]>
{
  constructor(
    @Inject(IUnidadeRepositoryDI)
    private readonly unidadeRepository: IUnidadeRepository,
  ) {}

  async execute(query: ListarTodasUnidadesQuery): Promise<UnidadeResponse[]> {
    const unidades = await this.unidadeRepository.listarTodos(
      query.desativados,
    );

    return unidades.map((unidade) => ({
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
      status: (+unidade.status).toString(),
    }));
  }
}
