import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationResolver } from './organization.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [OrganizationService, OrganizationResolver, PrismaService],
})
export class OrganizationModule {}
