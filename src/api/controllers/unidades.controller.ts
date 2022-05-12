import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CriarUnidadeDataRequest } from '@/api/dtos/criar-unidade.request';
import { CriarUnidadeCommand } from '@/app/commands/criar-unidade.command';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AtualizarUnidadeDataRequest } from '@/api/dtos/atualizar-unidade.request';
import { AtualizarUnidadeCommand } from '@/app/commands/atualizar-unidade.command';
import { ListarTodasUnidadesQuery } from '@/app/queries/listar-todas-unidades.query';
import { BuscarUnidadePorIdQuery } from '@/app/queries/buscar-unidade-por-id.query';
import { DesativarUnidadeCommand } from '@/app/commands/desativar-unidade.command';
import { AtivarUnidadeCommand } from '@/app/commands/ativar-unidade.command';
import { DashboardUnidadeQuery } from '@/app/queries/dashboard-unidade.query';

@ApiTags('UnidadesController')
@Controller()
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

  @ApiQuery({
    name: 'status',
    type: Boolean,
    description:
      'Mandar como true caso queira retornar unidades com status false',
    required: true,
  })
  @Get()
  async listarTodos(@Query('status', ParseBoolPipe) status: boolean) {
    return this.queryBus.execute(new ListarTodasUnidadesQuery(status));
  }

  @Get('/unidade/:id')
  async buscarPorId(@Param('id') id: number) {
    return this.queryBus.execute(new BuscarUnidadePorIdQuery(id));
  }

  @Post('/unidade/:id/ativar')
  async ativar(@Param('id') id: number) {
    return this.commandBus.execute(new AtivarUnidadeCommand(id));
  }

  @Post('/unidade/:id/desativar')
  async desativar(@Param('id') id: number) {
    return this.commandBus.execute(new DesativarUnidadeCommand(id));
  }

  @Get('/dashboard')
  async dashboard() {
    return this.queryBus.execute(new DashboardUnidadeQuery());
  }
}
