import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationResolver } from './organization.resolver';

@Module({
  providers: [OrganizationService, OrganizationResolver],
})
export class OrganizationModule {}
