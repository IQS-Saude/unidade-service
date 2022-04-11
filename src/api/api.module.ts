import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UnidadesController } from '@/api/controllers/unidades.controller';

@Module({
  imports: [CqrsModule],
  controllers: [UnidadesController],
})
export class ApiModule {}
