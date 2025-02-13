import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesResolver } from './services.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ServicesService, ServicesResolver, PrismaService],
})
export class ServicesModule {}
