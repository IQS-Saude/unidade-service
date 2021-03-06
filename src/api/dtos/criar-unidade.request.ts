import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBooleanString,
  IsNumberString,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CriarUnidadeEnderecoRequest {
  @ApiProperty({
    description: 'Estado da unidade',
    example: 'São Paulo',
  })
  @IsString({
    message: 'estado deve ser uma string',
  })
  estado: string;

  @ApiProperty({
    description: 'Cidade da unidade',
    example: 'São José do Rio Preto',
  })
  @IsString({
    message: 'cidade deve ser uma string',
  })
  cidade: string;

  @ApiProperty({
    description: 'Logradouro da unidade',
    example: 'Av. Bady Bassit',
  })
  @IsString({ message: 'logradouro deve ser uma string' })
  logradouro: string;

  @ApiProperty({
    description: 'Numero do endereco da unidade',
    example: '540',
  })
  @IsString({
    message: 'numero deve ser uma string',
  })
  numero: string;

  @ApiProperty({
    description: 'Bairro da unidade',
    example: 'Redentora',
  })
  @IsString({ message: 'bairro deve ser uma unidade' })
  bairro: string;

  @ApiProperty({
    description: 'Cep da unidade',
    example: '15015300',
  })
  @IsNumberString({ message: 'cep deve ser um numero inteiro' })
  cep: number;

  @ApiPropertyOptional({
    description: 'Latitude da unidade',
    example: '-20.82005724475512',
  })
  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  latitude?: number;

  @ApiPropertyOptional({
    description: 'Longitude da unidade',
    example: '-49.339789263013024',
  })
  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  longitude?: number;
}

export class CriarUnidadeRequest {
  @ApiProperty({
    description: 'Descricao da unidade',
    example: 'São José do Rio Preto',
  })
  @IsString({ message: 'descricao deve ser uma string' })
  descricao: string;

  @ApiProperty({
    description: 'Url Amigavel para a unidade',
    example: 'sao-jose-do-rio-preto',
  })
  @IsString({ message: 'url_amigavel deve ser uma string' })
  url_amigavel: string;

  @ApiProperty({
    type: CriarUnidadeEnderecoRequest,
    description: 'Endereco da unidade',
  })
  @ValidateNested()
  @Type(() => CriarUnidadeEnderecoRequest)
  endereco: CriarUnidadeEnderecoRequest;

  @ApiPropertyOptional({
    description: 'Telefone da unidade',
    example: 1731218410,
  })
  @IsOptional()
  @IsNumberString({ message: 'telefone deve ser um numero inteiro' })
  telefone?: number;

  @ApiPropertyOptional({
    description: 'Celular da unidade',
    example: 17982266554,
  })
  @IsOptional()
  @IsNumberString({ message: 'celular deve ser um numero inteiro' })
  celular?: number;

  @ApiProperty({
    description: 'Email de contato da unidade',
    example: 'contato@iqs.com.br',
  })
  @Matches(
    /[a-z\d!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z\d!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?/,
    { message: 'email deve ser um E-mail valido' },
  )
  @IsString({ message: 'email deve ser uma string' })
  email: string;

  @ApiPropertyOptional({
    description: 'Url do facebook da unidade',
    example: 'www.facebook.com/iqs',
  })
  @IsOptional()
  @IsString({ message: 'url_facebook deve ser uma string' })
  url_facebook?: string;

  @ApiPropertyOptional({
    description: 'Url do instagram da unidade',
    example: 'www.instagram.com/iqs',
  })
  @IsOptional()
  @IsString({ message: 'url_instagram deve ser uma string' })
  url_instagram?: string;

  @ApiPropertyOptional({
    description: 'Url do youtube da unidade',
    example: 'www.youtube.com/iqs',
  })
  @IsOptional()
  @IsString({ message: 'url_youtube deve ser uma string' })
  url_youtube?: string;

  @ApiPropertyOptional({
    description: 'Status da unidade',
    example: '1',
  })
  @IsOptional()
  @IsBooleanString({ message: 'status deve ser um booleano' })
  status: string;
}

export class CriarUnidadeDataRequest {
  @ApiProperty()
  @Type(() => CriarUnidadeRequest)
  @ValidateNested()
  data: CriarUnidadeRequest;
}
