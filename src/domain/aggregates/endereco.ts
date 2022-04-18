import { ValueObject } from '@/domain/seed-work/value-object';

export interface IEnderecoProps {
  estado: string;
  cidade: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: number;
  latitude?: number;
  longitude?: number;
}

export class Endereco extends ValueObject<IEnderecoProps> {
  private constructor(props: IEnderecoProps) {
    super(props);
  }

  public static create(props: IEnderecoProps) {
    return new Endereco(props);
  }

  public get estado() {
    return this.props.estado;
  }

  public get cidade() {
    return this.props.cidade;
  }

  public get logradouro() {
    return this.props.logradouro;
  }

  public get numero() {
    return this.props.numero;
  }

  public get bairro() {
    return this.props.bairro;
  }

  public get cep() {
    return this.props.cep;
  }

  public get latitude() {
    return this.props.latitude;
  }

  public get longitude() {
    return this.props.longitude;
  }
}
