import { Resolver, Query, Context } from '@nestjs/graphql';
import { OrganizationService } from './organization.service';
import { OrganizationObj } from './organization.model';
import { OrgServicesObj } from '../org-services/org-services.model';

@Resolver(() => OrganizationObj)
export class OrganizationResolver {
  constructor(private readonly organizationService: OrganizationService) {}
  @Query(() => [OrganizationObj])
  organization(): OrganizationObj[] {
    return this.organizationService.findall();
  }

  @Query(() => [OrgServicesObj])
  getAllPurchase(@Context() ctx): Promise<OrgServicesObj[]> {
    try {
      const { org_user_id } = ctx.user;
      return this.organizationService.getAllPurchases({ org_user_id });
    } catch (error) {
      console.log('🚀 ~ OrganizationResolver ~ getAllPurchase ~ error:', error);
      return error;
    }
  }
}
