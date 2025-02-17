import { Module } from '@nestjs/common';
import { SubOrgResolver } from './sub-org.resolver';
import { SubOrgService } from './sub-org.service';
import { PrismaService } from 'src/prisma/prisma.service';
 
@Module({
  providers: [SubOrgResolver, SubOrgService, PrismaService],
})
export class SubOrgModule {}
