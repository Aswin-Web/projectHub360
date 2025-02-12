import { Resolver, Query } from '@nestjs/graphql';
import { OrganizationService } from './organization.service';
import { OrganizationObj } from './organization.model';

@Resolver(() => OrganizationObj)
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}
  @Query(() => [OrganizationObj])
  organization(): OrganizationObj[] {
    return this.organizationService.findall();
  }
}
