import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { SubOrgObj } from './sub-org.model';
import { SubOrgService } from './sub-org.service';

export interface BodyCreateSubOrgINT {
  sub_external_name: string;
}

@Resolver()
export class SubOrgResolver {
  constructor(private readonly subOrgservice: SubOrgService) {}
  @Mutation(() => SubOrgObj)
  async createSubOrg(
    @Args('input') data: BodyCreateSubOrgINT,
    @Context() context,
  ) {
    console.log('🚀 ~ SubOrgResolver ~ createSubOrg ~ data:', data);

    return this.subOrgservice.createASubOrg({
      org_id: context.org_id,
      sub_external_name: data.sub_external_name,
      user_id: context.user_id,
    });
  }
}
