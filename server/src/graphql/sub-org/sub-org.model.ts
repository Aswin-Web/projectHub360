import { Field, ObjectType } from '@nestjs/graphql';
import { SubOrganization } from '@prisma/client';
import { OrganizationObj } from '../organization/organization.model';

@ObjectType()
export class SubOrgObj implements SubOrganization {
  @Field()
  created_at: Date;
  @Field()
  org_id: number;
  @Field()
  sub_external_name: string;
  @Field()
  sub_org_id: number;
  @Field()
  updated_at: Date;
  @Field()
  user_id: string;
  @Field(() => OrganizationObj)
  org: OrganizationObj;
}
