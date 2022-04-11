import { IUnidadeRepository } from '@/app/ports/unidade-repository.interface';
import { Unidade } from '@/domain/aggregates/unidade';
import { Repository } from 'typeorm';
import { UnidadeModel } from '@/infrastructure/data/models/unidade.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UnidadeMapper } from '@/infrastructure/data/mappers/unidade.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UnidadeRepository implements IUnidadeRepository {
  constructor(
    @InjectRepository(UnidadeModel)
    private readonly repository: Repository<UnidadeModel>,
  ) {}

  async salvar(unidade: Unidade): Promise<Unidade> {
    let model = await this.repository.findOne({ id: unidade.getId() });

    if (model) {
      model = this.repository.merge(model, UnidadeMapper.toModel(unidade));
    } else {
      model = this.repository.create(UnidadeMapper.toModel(unidade));
    }

    return UnidadeMapper.toDomain(await this.repository.save(model));
  }

  async listarTodos(): Promise<Unidade[]> {
    const models = await this.repository.find();

    return models.map(UnidadeMapper.toDomain);
  }
}
