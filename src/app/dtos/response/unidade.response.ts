export interface EnderecoResponse {
  estado: string;
  cidade: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: number;
  latitude: number;
  longitude: number;
}

export interface UnidadeResponse {
  id: number;
  descricao: string;
  url_amigavel: string;
  endereco: EnderecoResponse;
  telefone?: number;
  celular?: number;
  email?: string;
  url_facebook?: string;
  url_instagram?: string;
  url_youtube?: string;
  status: string;
}
