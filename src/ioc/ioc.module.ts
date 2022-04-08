import { Module } from '@nestjs/common';
import { ApiModule } from '@/api/api.module';
import { AppModule } from '@/app/app.module';
import { DomainModule } from '@/domain/domain.module';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';

@Module({
  imports: [ApiModule, AppModule, DomainModule, InfrastructureModule],
})
export class IocModule {}
