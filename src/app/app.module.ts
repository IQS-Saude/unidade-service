import { Module } from '@nestjs/common';
import { DomainModule } from '@/domain/domain.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [DomainModule, CqrsModule],
})
export class AppModule {}
