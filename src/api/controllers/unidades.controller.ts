import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CriarUnidadeDataRequest } from '@/api/dtos/criar-unidade.request';
import { CriarUnidadeCommand } from '@/app/commands/criar-unidade.command';
import { ApiTags } from '@nestjs/swagger';
import { AtualizarUnidadeDataRequest } from '@/api/dtos/atualizar-unidade.request';
import { AtualizarUnidadeCommand } from '@/app/commands/atualizar-unidade.command';
import { ListarTodasUnidadesQuery } from '@/app/queries/listar-todas-unidades.query';
import { BuscarUnidadePorIdQuery } from '@/app/queries/buscar-unidade-por-id.query';

@ApiTags('UnidadesController')
@Controller('unidades')
export class UnidadesController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async criar(@Body() request: CriarUnidadeDataRequest) {
    return this.commandBus.execute(new CriarUnidadeCommand(request.data));
  }

  @Patch()
  async atualizar(@Body() request: AtualizarUnidadeDataRequest) {
    return this.commandBus.execute(new AtualizarUnidadeCommand(request.data));
  }

  @Get()
  async listarTodos() {
    return this.queryBus.execute(new ListarTodasUnidadesQuery());
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: number) {
    return this.queryBus.execute(new BuscarUnidadePorIdQuery(id));
  }
}
