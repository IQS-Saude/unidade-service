import { Module } from '@nestjs/common';
import { PrismaService } from '@/infrastructure/data/prisma.service';

@Module({
  imports: [],
  providers: [PrismaService],
})
export class InfrastructureModule {}
