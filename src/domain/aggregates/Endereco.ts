import { ValueObject } from '@/domain/seed-work/value-object';

export interface IEnderecoProps {
  estado: string;
  cidade: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: number;
  latitude: number;
  longitude: number;
}

export class Endereco extends ValueObject<IEnderecoProps> {
  private constructor(props: IEnderecoProps) {
    super(props);
  }

  public static create(props: IEnderecoProps) {
    return new Endereco(props);
  }

  public get estado(): string {
    return this.props.estado;
  }

  public get cidade(): string {
    return this.props.cidade;
  }

  public get logradouro(): string {
    return this.props.logradouro;
  }

  public get numero(): string {
    return this.props.numero;
  }

  public get bairro(): string {
    return this.props.bairro;
  }

  public get cep(): number {
    return this.props.cep;
  }

  public get latitude(): number {
    return this.props.latitude;
  }

  public get longitude(): number {
    return this.props.longitude;
  }
}
