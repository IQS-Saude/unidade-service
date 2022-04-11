import { UnidadeModel } from '@/infrastructure/data/models/unidade.model';
import { Unidade } from '@/domain/aggregates/unidade';
import { Endereco } from '@/domain/aggregates/endereco';

export class UnidadeMapper {
  public static toDomain(model: UnidadeModel) {
    return Unidade.create(
      {
        descricao: model.descricao,
        urlAmigavel: model.urlAmigavel,
        endereco: Endereco.create({
          estado: model.estado,
          cidade: model.cidade,
          logradouro: model.logradouro,
          numero: model.numero,
          bairro: model.bairro,
          cep: model.cep,
          latitude: model.latitude,
          longitude: model.longitude,
        }),
        telefone: model.telefone,
        celular: model.celular,
        email: model.email,
        urlFacebook: model.urlFacebook,
        urlInstagram: model.urlInstagram,
        urlYoutube: model.urlYoutube,
        status: model.status,
      },
      model.id,
    );
  }

  public static toModel(domain: Unidade): UnidadeModel {
    return {
      id: domain.getId(),
      descricao: domain.descricao,
      urlAmigavel: domain.urlAmigavel,
      estado: domain.endereco.estado,
      cidade: domain.endereco.cidade,
      logradouro: domain.endereco.logradouro,
      numero: domain.endereco.numero,
      bairro: domain.endereco.bairro,
      cep: domain.endereco.cep,
      latitude: domain.endereco.latitude,
      longitude: domain.endereco.longitude,
      telefone: domain.telefone,
      celular: domain.celular,
      email: domain.email,
      urlFacebook: domain.urlFacebook,
      urlInstagram: domain.urlInstagram,
      urlYoutube: domain.urlYoutube,
      status: domain.status,
    };
  }
}
