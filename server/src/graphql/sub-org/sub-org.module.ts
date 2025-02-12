import { Module } from '@nestjs/common';
import { SubOrgResolver } from './sub-org.resolver';
import { SubOrgService } from './sub-org.service';

@Module({
  providers: [SubOrgResolver, SubOrgService]
})
export class SubOrgModule {}
