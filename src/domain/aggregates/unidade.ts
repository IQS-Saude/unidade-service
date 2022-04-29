import { Endereco } from '@/domain/aggregates/endereco';
import { Entity } from '@/domain/seed-work/entity';
import { IAggregateRoot } from '@/domain/seed-work/aggregate-root.interface';
import { UnidadeJaDesativadaException } from '@/domain/exceptions/unidade-ja-desativada.exception';
import { UnidadeJaAtivadaException } from '@/domain/exceptions/unidade-ja-ativada.exception';

export interface IUnidadeProps {
  descricao: string;
  urlAmigavel: string;
  endereco: Endereco;
  telefone?: number;
  celular?: number;
  email: string;
  urlFacebook?: string;
  urlInstagram?: string;
  urlYoutube?: string;
  status: boolean;
}

export class Unidade extends Entity<IUnidadeProps> implements IAggregateRoot {
  private constructor(props: IUnidadeProps, id?: number) {
    super(props, id);
  }

  public static create(props: IUnidadeProps, id?: number) {
    return new Unidade(props, id);
  }

  public get descricao() {
    return this.props.descricao;
  }

  public get urlAmigavel() {
    return this.props.urlAmigavel;
  }

  public get endereco() {
    return this.props.endereco;
  }

  public get telefone() {
    return this.props.telefone;
  }

  public get celular() {
    return this.props.celular;
  }

  public get email() {
    return this.props.email;
  }

  public get urlFacebook() {
    return this.props.urlFacebook;
  }

  public get urlInstagram() {
    return this.props.urlInstagram;
  }

  public get urlYoutube() {
    return this.props.urlYoutube;
  }

  public get status() {
    return this.props.status;
  }

  public desativarUnidade() {
    if (!this.props.status) {
      throw new UnidadeJaDesativadaException();
    }

    this.props.status = false;
    // TODO adicionar o evento de desativacao de unidade
    // this.addDomainEvents()
  }

  public ativarUnidade() {
    if (this.props.status) {
      throw new UnidadeJaAtivadaException();
    }

    this.props.status = true;
    // TODO adicionar o evento de ativacao de unidade
    // this.addDomainEvents()
  }
}
