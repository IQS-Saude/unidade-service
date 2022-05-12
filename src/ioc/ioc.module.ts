import { Module } from '@nestjs/common';
import { ApiModule } from '@/api/api.module';
import { AppModule } from '@/app/app.module';
import { DomainModule } from '@/domain/domain.module';
import { InfrastructureModule } from '@/infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ApiModule,
    AppModule,
    DomainModule,
    InfrastructureModule,
  ],
})
export class IocModule {}
