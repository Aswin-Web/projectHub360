import {
  Args,
  Context,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { SubOrgObj } from './sub-org.model';
import { SubOrgService } from './sub-org.service';

@InputType()
export class CreateSubOrgInput {
  @Field()
  sub_external_name: string;
}

@Resolver()
export class SubOrgResolver {
  constructor(readonly subOrgservice: SubOrgService) {}
  @Mutation(() => SubOrgObj)
  async createSubOrg(
    @Args('input') data: CreateSubOrgInput,
    @Context() context,
  ) {
    const { org_id, id } = context.user;
    return this.subOrgservice.createASubOrg({
      org_id: org_id,
      sub_external_name: data.sub_external_name,
      user_id: id,
    });
  }

  @Query(() => [SubOrgObj])
  async getAllSubOrg() {
    return await this.subOrgservice.getAllSubOrg();
  }
}
